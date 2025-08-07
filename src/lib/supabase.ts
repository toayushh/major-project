import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = 'https://tbjtgrdiilrutvrjnglp.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRianRncmRpaWxydXR2cmpuZ2xwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwNzI1NjEsImV4cCI6MjA2OTY0ODU2MX0.TS_SS0c9YZPDqUMAjj1fRXPxznf46nbGdFWxN3AM5YY';

// Create and export the Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
});
