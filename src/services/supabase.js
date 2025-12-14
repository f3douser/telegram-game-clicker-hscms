import { createClient } from '@supabase/supabase-js'

// DB = 4AfDpDMQD1eZQUYf

const SUPABASE_URL = 'https://plifvgklzkdboeeurbax.supabase.co'
const SUPABASE_API_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsaWZ2Z2tsemtkYm9lZXVyYmF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU2OTEzMDIsImV4cCI6MjA4MTI2NzMwMn0.nYbo9-zGwWWQeXIOnr3ukH71J14qEZWdXJMWM_HzuQc'

const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY)
export default supabase
