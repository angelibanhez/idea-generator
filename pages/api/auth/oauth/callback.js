import { supabase } from '@/supabaseClient'
import { NextResponse } from 'next/server'

export default async function handler(req, res) {
  const { code, next = '/' } = req.query
  const origin = req.headers.origin

  if (code) {
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    if (!error) {
      return res.redirect(`${origin}${next}`)
    }
  }

  // return the user to an error page with instructions
  return res.redirect(`${origin}/auth/auth-code-error`)
}
