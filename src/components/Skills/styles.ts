import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex: 1 1 40%;
  flex-direction: column;
  align-items: center;
  margin-left: 1.5rem;

  h2 {
    ::after {
      content: '';
      width: 80%;
      margin: 0.4rem auto 0;
      height: 2px;
      display: block;
      background-color: #758496;
    }
  }

  ul {
    margin-top: 2.1rem;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;
    align-items: center;
    li {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      p {
        font-size: 1rem;
        margin-top: 0.2rem;
        color: #758496;
      }
    }
  }

  @media (max-width: 800px) {
    margin-left: 0;
    flex: 1 1 100%;
    margin-bottom: 2.5rem;

    ul {
      column-gap: 2rem;
    }
  }

  @media (max-width: 500px) {
    ul {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`
