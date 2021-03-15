import styled from 'styled-components'

export const Wrapper = styled.footer`
  position: relative;
  background-color: rgba(0, 0, 0, 0.25);
  height: 15rem;
  padding-top: 4rem;
`
export const Copy = styled.div`
  position: relative;
  margin: 1.4rem auto;

  text-align: center;

  p {
    color: #f5f5f5;
    padding: 0.3rem 0;
    a {
      color: #4caf50;
      margin-left: 0.2rem;
      text-decoration: none;
      transition: 0.3s;
      :hover {
        filter: brightness(80%);
      }
    }
    svg {
      margin-left: 0.2rem;
      color: #4caf50;
      transition: 0.3s;

      :hover {
        filter: brightness(80%);
      }
    }
  }
`
