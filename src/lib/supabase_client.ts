import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseUrl = "https://hzopfuvguedawzpphcay.supabase.co";
// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6b3BmdXZndWVkYXd6cHBoY2F5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIwMjgyOTUsImV4cCI6MjA2NzYwNDI5NX0.NY8UURAEzBHvGFNWK9SQysx72bgbuUZpplw_w0xxMtM";

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
