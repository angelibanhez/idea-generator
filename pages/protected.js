// pages/protected.js
import { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'
import { useRouter } from 'next/router'

const Protected = () => {
  const [session, setSession] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const session = supabase.auth.session()
    setSession(session)

    if (!session) {
      router.push('/login')
    }

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      if (!session) {
        router.push('/login')
      }
    })
  }, [])

  return (
    <div>
      {session ? <h1>Protected Content</h1> : <p>Redirecting to login...</p>}
    </div>
  )
}

export default Protected
