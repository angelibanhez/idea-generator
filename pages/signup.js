import { useState } from 'react'
import { supabase } from '../supabaseClient'
import Link from 'next/link'
import GoogleIcon from '../components/GoogleIcon'
import styled from 'styled-components'

// Definición de estilos
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: var(--background);
`

const StyledCard = styled.div`
  width: 100%;
  max-width: 24rem;
  padding: 1.5rem;
  box-shadow: var(--shadow-lg);
  background-color: var(--card);
`

const CardHeader = styled.div`
  margin-bottom: 1.5rem;
`

const CardTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: var(--foreground);
`

const CardDescription = styled.p`
  margin-top: 0.5rem;
  color: var(--foreground);
`

const CardContent = styled.div`
  margin-bottom: 1.5rem;
`

const FieldGroup = styled.div`
  margin-bottom: 1rem;
`

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: var(--foreground);
`

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid var(--border);
  border-radius: 0.25rem;
  background-color: var(--input);
  color: var(--foreground);
`

const CardFooter = styled.div`
  margin-top: 1.5rem;
`

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: var(--primary);
  color: var(--primary-foreground);
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  &:hover {
    background-color: var(--accent);
  }
`

const GoogleButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  color: #000;
  border: 1px solid #ccc;
  margin-top: 1rem;

  svg {
    margin-right: 0.5rem;
  }
`

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSignup = async (e) => {
    e.preventDefault()
    setLoading(true)

    const { error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      alert(error.message)
    } else {
      alert('Account created successfully! Check your email for the confirmation link.')
    }

    setLoading(false)
  }

  const handleOAuthSignup = async (provider) => {
    const { error } = await supabase.auth.signInWithOAuth({ provider })
    if (error) {
      alert(error.message)
    }
  }

  return (
    <Container>
      <StyledCard>
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>Regístrate con tu correo o Google</CardDescription>
        </CardHeader>
        <form onSubmit={handleSignup}>
          <CardContent>
            <FieldGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FieldGroup>
            <FieldGroup>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </FieldGroup>
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={loading}>
              {loading ? 'Loading...' : 'Sign Up'}
            </Button>
            <GoogleButton onClick={() => handleOAuthSignup('google')}>
              <GoogleIcon />
              Sign Up with Google
            </GoogleButton>
            <p>
              Ya tienes una cuenta?{' '}
              <Link href="/login" legacyBehavior>
                <a>Inicia sesión</a>
              </Link>
            </p>
          </CardFooter>
        </form>
      </StyledCard>
    </Container>
  )
}

export default Signup
