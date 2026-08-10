import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined
const key = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined

/**
 * Anon key memang dirancang untuk publik. Keamanan berasal dari Row Level
 * Security di sisi database, bukan dari menyembunyikan key ini.
 */
export const isSupabaseReady = Boolean(url && key)

export const supabase = isSupabaseReady ? createClient(url!, key!) : null
