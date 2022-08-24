import { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'

import { Container } from './style'

interface Data {
  name: string;
  email: string;
}

export function Contact() {
  const [data, setData] = useState<Data>();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(data);
  }

  return (
    <Container>
      <div className="form-wrapper">
        <h1>Contact</h1>

        <div className="card">
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              placeholder="name"
              onChange={(e) =>
                setData({ ...data, name: e.target.value } as Data)
              }
            />
            <input
              type="email"
              placeholder="email"
              onChange={(e) =>
                setData({ ...data, email: e.target.value } as Data)
              }
            />
            <input type="submit" value="register" />
          </form>
        </div>

        <Link to="/">Home</Link>
      </div>
    </Container>
  );
}