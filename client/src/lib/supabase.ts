import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabase: SupabaseClient | null = null;

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
}

export function isSupabaseConfigured(): boolean {
  return supabase !== null;
}

export async function saveDemoRequest(data: { name: string; whatsapp: string; needs: string }) {
  if (!supabase) {
    console.warn('Supabase not configured. Demo request will be logged only:', data);
    return null;
  }

  const { data: result, error } = await supabase
    .from('demo_requests')
    .insert([data])
    .select();

  if (error) {
    console.error('Error saving demo request to Supabase:', error);
    console.warn('Continuing without persistence. Demo request:', data);
    return null;
  }

  console.log('Demo request saved successfully to Supabase');
  return result;
}
