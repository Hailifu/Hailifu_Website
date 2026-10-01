import { createClient } from '@supabase/supabase-js'

// HAILIFU PRODUCTION CONFIGURATION
const supabaseUrl = 'https://qcyhxurhbvcgftyzlqdu.supabase.co'
const supabaseKey = 'sb_publishable_hiwVyXc__zjR39W2V3bAPQ_XJhuY3bn'

export const supabase = createClient(supabaseUrl, supabaseKey)

console.log("[HAILIFU] Core Library Restored. Supabase connection active.");