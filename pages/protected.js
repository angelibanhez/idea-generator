import { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'
import { useRouter } from 'next/router'

const Protected = () => {
  const [session, setSession] = useState(null)
  const router = useRouter()

  const loadSession = async () => {
    const { data, error } = await supabase.auth.getSession()
    if(error){
      router.push('/login')
    }
    setSession(data.session)
  }

  useEffect(() => {
    loadSession()
  }, [])

  return (
    <div>
      <p>Current User: {session?.user?.email}</p>
      <button onClick={() => {
        supabase.auth.signOut().then(router.reload)
      }}>Logout</button>
    </div>
  )
}

export default Protected