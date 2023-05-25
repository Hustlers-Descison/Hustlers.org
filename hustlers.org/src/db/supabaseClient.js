import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient(
    process.env.HUSTLERS_SUPABASE_URL, 
    process.env.HUSTLERS_SUPABASE_ANON_KEY
);