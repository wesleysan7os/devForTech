import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: green;
  color: #fff;

  .form-wrapper {
    display: grid;
    text-align: center;

    .card {
      background-color: #fff;
      border-radius: 1rem;
      padding: 1.5rem;
      margin: 1rem 0;

      form {
        display: grid;
        gap: 1rem;

        input {
          padding: 0.5rem;
        }
      }
    }
  }
`