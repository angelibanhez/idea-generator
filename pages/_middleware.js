// pages/_middleware.js
import { NextResponse } from 'next/server'
import { supabase } from '../supabaseClient'

export async function middleware(req) {
  const { user } = await supabase.auth.api.getUserByCookie(req)

  if (!user) {
    const url = req.nextUrl.clone()
    url.pathname = '/login'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}
