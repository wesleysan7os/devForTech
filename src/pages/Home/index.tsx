import { Link } from 'react-router-dom'

import { Container } from "./style"

export function Home() {
  return (
    <Container>
      <h3>Home</h3>
      <Link to='/contact'>Contacts</Link>
    </Container>
  )
}