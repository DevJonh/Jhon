import styled from 'styled-components'

export const Wrapper = styled.div`
  color: #f5f5f5;
  background-color: #0b325a;
  display: flex;
  flex-direction: column;

  width: 70%;
  margin: 0rem auto;
  box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.25);
  border-radius: 0.4rem;
  padding: 2rem 3rem;
  position: relative;
  bottom: 0rem;
  z-index: 3;

  @media (max-width: 800px) {
    width: 80%;
    padding: 2rem 2rem;
  }
  @media (max-width: 500px) {
    width: 90%;
    padding: 2rem 1rem;
  }
`
export const Header = styled.div`
  padding: 0 1rem;
  h1 {
    ::after {
      content: '';
      width: 4rem;
      height: 1px;
      background-color: #758496;
      display: block;
      margin-top: 0.4rem;
    }
  }

  p {
    font-size: 1rem;
    line-height: 1.5rem;
    margin-top: 1.4rem;
  }

  &::after {
    content: '';
    width: 100%;
    height: 1px;
    background-color: #758496;
    display: block;
    margin-top: 0.8rem;
  }
`
export const MidiaContainer = styled.ul`
  padding: 0 1rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
`

export const Midias = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  div {
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 50%;
    background-color: #f5f5f5;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;

    svg {
      color: #758496;
      transition: 0.3s;
    }
  }

  p {
    margin-top: 0.6rem;
    letter-spacing: 0.08rem;
    font-size: 0.8rem;
    color: #f5f5f5;
    transition: 0.3s;
  }

  &:hover {
    div {
      background-color: #ddd;
    }
    svg {
      color: #4caf50;
    }
    p {
      color: #4caf50;
    }
  }
`
