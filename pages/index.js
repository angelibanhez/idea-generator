import Link from 'next/link'
import styled from 'styled-components'
import { useEffect, useState } from 'react'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: var(--background);
`

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: var(--foreground);
  margin-bottom: 1rem;
`

const Description = styled.p`
  font-size: 1.5rem;
  color: var(--foreground);
  margin-bottom: 2rem;
  text-align: center;
`

const Button = styled.a`
  display: flex;
  padding: 0.75rem 1.5rem;
  margin: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: var(--primary-foreground);
  background-color: var(--primary);
  border: none;

  border-radius: 0.25rem;
  text-decoration: none;

  &:hover {
    background-color: var(--accent);
  }
`

const LandingPage = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Container>
      <Title>Bienvenido a IDEA GENERATOR</Title>
      <Description>
        Una plataforma para gestionar tus tareas y proyectos
      </Description>
      <Link href='/login' passHref>
        <Button>Login</Button>
      </Link>
      <Link href='/signup' passHref>
        <Button>Sign Up</Button>
      </Link>
    </Container>
  )
}

export default LandingPage
