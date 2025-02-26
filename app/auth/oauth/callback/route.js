import { supabase } from '@/supabaseClient'
import { NextResponse } from 'next/server'
// The client you created from the Server-Side Auth instructions


export async function GET(request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  // if "next" is in param, use it as the redirect URL
  const next = searchParams.get('next') ?? '/'

  if (code) {
      const { error } = await supabase.auth.exchangeCodeForSession(code)
    if (!error) {
        console.log(error.message)
      return NextResponse.redirect(`${origin}${next}`)
    }
  }

  // return the user to an error page with instructions
  return NextResponse.redirect(`${origin}/auth/auth-code-error`)
}

