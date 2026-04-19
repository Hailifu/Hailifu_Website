import { createClient } from '@supabase/supabase-js'

const supabaseUrl = window.SUPABASE_URL || ''
const supabaseAnonKey = window.SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Test Supabase connection
const testConnection = async () => {
  const { data, error } = await supabase.from('installations').select('*');

  if (error) {
    console.log("Circuit Break:", error.message);
  } else {
    console.log("Signal Strong! Data received:", data);
  }
};

// Run the test
testConnection();