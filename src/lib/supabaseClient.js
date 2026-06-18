import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://hgdeczzjsciwvgpvdjaz.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_TOjvdhLlkaYIoUqjxf1uZQ_iDIezgv-'

export const supabase = createClient(supabaseUrl, supabaseKey)
