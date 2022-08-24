import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Container } from './style'

export function Home() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      <Container>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <h1>Home</h1>
            <Link to='/contact'>Contacts</Link>
          </>
        )}

      <button className='button-container' onClick={() => setIsLoading(!isLoading)}>Click me!</button>
      </Container>
      
    </>
  );
}