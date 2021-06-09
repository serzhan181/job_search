import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_DB_URL,
  process.env.NEXT_PUBLIC_DB_PUBLIC
)

export { supabase }
