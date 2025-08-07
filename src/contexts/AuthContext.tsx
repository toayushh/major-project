import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, Session, AuthChangeEvent, AuthError } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';
import { 
  getCurrentUser, 
  getSession, 
  signIn, 
  signUp, 
  signOut, 
  updateUser as updateUserService, 
  UpdateUserData,
  AuthResponse,
  AuthCredentials,
  SignupData
} from '@/services/auth.service';
import { supabase } from '@/lib/supabase';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  authLoading: boolean;
  login: (credentials: AuthCredentials) => Promise<AuthResponse>;
  register: (data: SignupData) => Promise<AuthResponse>;
  updateUser: (data: UpdateUserData) => Promise<{ error: any }>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check active sessions and set the user
    const checkSession = async () => {
      try {
        setLoading(true);
        const currentSession = await getSession();
        
        if (currentSession) {
          setSession(currentSession);
          const currentUser = await getCurrentUser();
          setUser(currentUser);
        }
      } catch (error) {
        console.error('Error checking session:', error);
      } finally {
        setLoading(false);
      }
    };

    checkSession();

    // Listen for changes in auth state
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event: AuthChangeEvent, session: Session | null) => {
      setSession(session);
      const currentUser = await getCurrentUser();
      setUser(currentUser);
      
      // Handle auth state changes
      if (event === 'SIGNED_IN') {
        // User just signed in
        navigate('/dashboard');
      } else if (event === 'SIGNED_OUT') {
        // User signed out
        navigate('/login');
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [navigate]);

  const login = async (credentials: AuthCredentials) => {
    try {
      const { user, session, error } = await signIn(credentials);
      if (user && session) {
        setUser(user);
        setSession(session);
      }
      return { user, session, error };
    } catch (error) {
      console.error('Login error:', error);
      return { user: null, session: null, error: error as AuthError };
    }
  };

  const register = async (data: SignupData): Promise<AuthResponse> => {
    setLoading(true);
    try {
      const { user, session, error } = await signUp(data);
      if (error) throw error;
      setUser(user);
      setSession(session);
      return { user, session, error: null };
    } catch (error) {
      console.error('Registration error:', error);
      const authError = error instanceof AuthError ? error : new AuthError('Registration failed', 500);
      return { user: null, session: null, error: authError };
    } finally {
      setLoading(false);
    }
  };

  const updateUser = async (data: UpdateUserData) => {
    try {
      const { error } = await updateUserService(data);
      if (error) throw error;
      
      // Refresh user data after update
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      
      return { error: null };
    } catch (error) {
      console.error('Update user error:', error);
      return { error };
    }
  };

  const logout = async () => {
    await signOut();
    setUser(null);
    setSession(null);
    navigate('/login');
  };

  const value = {
    user,
    session,
    loading,
    login,
    register,
    updateUser,
    logout,
    isAuthenticated: !!user,
    // Alias for loading to be more explicit in components
    authLoading: loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
