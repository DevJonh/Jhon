import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1 1 40%;
  margin-right: 1.5rem;

  img {
    border-radius: 50%;
  }

  p.description {
    font-size: 0.9rem;
    text-align: center;
    line-height: 1.2rem;
    color: #f5f5f5;
    margin-top: 1.4rem;
  }

  &::after {
    content: '';
    width: 2px;
    height: 100%;
    display: inline-block;
    background-color: #758496;
    position: absolute;
    right: -1.5rem;
  }

  @media (max-width: 800px) {
    margin-bottom: 4rem;
    margin-right: 0;
    &::after {
      display: none;
    }
    div > p {
      max-width: 100%;
    }
    p {
      max-width: 80%;
      line-height: 1.6rem;
    }
  }

  @media (max-width: 500px) {
    margin: 0 auto 2.5rem 0;
    p {
      max-width: 100%;
    }
  }
`
