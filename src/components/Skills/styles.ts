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
    width: 100%;
    margin-top: 2.1rem;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    row-gap: 1.5rem;
    align-items: center;
    li {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      flex: 1;

      img {
        width: 2rem;
      }
      p {
        font-size: 0.8rem;
        margin-top: 0.8rem;
        color: #f5f5f5;
        letter-spacing: 0.1rem;
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
      column-gap: 0.6rem;
    }
  }

  @media (max-width: 375px) {
    ul {
      grid-template-columns: repeat(3, 1fr);
      row-gap: 2rem;
      column-gap: 1.2rem;
      margin-top: 2rem;
      margin-left: -1rem;
    }
  }
`
