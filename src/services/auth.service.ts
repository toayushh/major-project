import { User, Session, AuthError } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';
import { v4 as uuidv4 } from 'uuid';

// Define types for our auth service
export interface AuthCredentials {
  email: string;
  password: string;
}

export interface SignupData extends AuthCredentials {
  fullName: string;
  username: string;
  phone: string;
  gender: string;
  dateOfBirth: string;
  role: string;
  metadata?: {
    [key: string]: any;
    termsAccepted?: boolean;
    signupDate?: string;
  };
}

export interface UpdateUserData {
  name?: string;
  currentPassword?: string;
  newPassword?: string;
}

export interface AuthResponse {
  user: User | null;
  session: Session | null;
  error: AuthError | null;
}

export const signUp = async (data: SignupData): Promise<AuthResponse> => {
  try {
    // Generate a username if not provided
    const username = data.username || `user_${uuidv4().substring(0, 8)}`;
    
    // Create auth user with metadata
    const { data: authData, error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        data: {
          full_name: data.fullName,
          username: username,
          phone: data.phone,
          gender: data.gender,
          role: data.role,
          date_of_birth: data.dateOfBirth
        },
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) throw error;



    return {
      user: authData.user,
      session: authData.session,
      error: null,
    };
  } catch (error) {
    console.error('Signup error:', error);
    return {
      user: null,
      session: null,
      error: error as AuthError,
    };
  }
};

export const signIn = async (credentials: AuthCredentials): Promise<AuthResponse> => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: credentials.email,
      password: credentials.password,
    });

    if (error) {
      if (error.message.includes('Invalid login credentials')) {
        throw new Error('Invalid email or password');
      }
      throw error;
    }

    // Get the user's profile
    if (data.user) {
      const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', data.user.id)
        .single();

      // Update user metadata with profile data
      if (profile) {
        await supabase.auth.updateUser({
          data: {
            ...data.user.user_metadata,
            full_name: profile.full_name,
            username: profile.username,
            avatar_url: profile.avatar_url,
          },
        });
      }
    }

    return {
      user: data.user,
      session: data.session,
      error: null,
    };
  } catch (error) {
    console.error('Sign in error:', error);
    return {
      user: null,
      session: null,
      error: error as AuthError,
    };
  }
};

export const signOut = async (): Promise<{ error: any }> => {
  const { error } = await supabase.auth.signOut();
  return { error };
};

export const updateUser = async (data: UpdateUserData): Promise<{ error: any }> => {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      return { error: new Error('No authenticated user') };
    }
    
    // Update user metadata if name is provided
    if (data.name) {
      const { error: metadataError } = await supabase.auth.updateUser({
        data: { full_name: data.name }
      });
      
      if (metadataError) {
        return { error: metadataError };
      }
    }
    
    // Update password if new password and current password are provided
    if (data.newPassword && data.currentPassword) {
      // First, reauthenticate the user
      const { error: reauthError } = await supabase.auth.signInWithPassword({
        email: user.email || '',
        password: data.currentPassword,
      });
      
      if (reauthError) {
        return { error: reauthError };
      }
      
      // Then update the password
      const { error: passwordError } = await supabase.auth.updateUser({
        password: data.newPassword
      });
      
      if (passwordError) {
        return { error: passwordError };
      }
    }
    
    return { error: null };
  } catch (error) {
    console.error('Error updating user:', error);
    return { error: error instanceof Error ? error : new Error('An unknown error occurred') };
  }
};

export const getCurrentUser = async (): Promise<User | null> => {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
};

export const getSession = async (): Promise<Session | null> => {
  const { data: { session } } = await supabase.auth.getSession();
  return session;
};

// Password reset
export const resetPassword = async (email: string): Promise<{ error: AuthError | null }> => {
  try {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    return { error };
  } catch (error) {
    console.error('Password reset error:', error);
    return { error: error as AuthError };
  }
};

// Update user password
export const updatePassword = async (newPassword: string): Promise<{ error: AuthError | null }> => {
  try {
    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });
    return { error };
  } catch (error) {
    console.error('Update password error:', error);
    return { error: error as AuthError };
  }
};
