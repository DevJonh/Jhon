import styled from 'styled-components'

export const HeaderStyles = styled.header`
  position: relative;
  padding: 3rem 6rem;
  width: 100%;
  height: 20%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  .bg {
    position: absolute;
    bottom: -12rem;
    max-width: 100%;
    transform: rotate(180deg);
    mix-blend-mode: lighten;
  }
  a {
    color: #f5f5f5;
    z-index: 2;
    position: absolute;
    left: 6rem;
    font-size: 2rem;
    transition: 0.6s;
    &:hover {
      color: #4caf50;
      transform: translateX(-0.4rem);
    }
  }

  @media (max-width: 800px) {
    padding: 3rem 4rem;
    a {
      left: 4rem;
    }
  }
  @media (max-width: 500px) {
    padding: 2rem 2rem;
    a {
      left: 2rem;
    }
  }
`
export const ContainerImage = styled.div`
  width: 100%;
  position: relative;
  background-color: rgba(0, 0, 0, 0.5);
  border: 2px solid #758496;
  div {
    width: 100%;
  }
  img {
    width: 100%;
  }
`
export const Container = styled.div`
  padding: 3rem 6rem;
  position: relative;

  @media (max-width: 800px) {
    padding: 3rem 2.5rem;
  }
  @media (max-width: 500px) {
    padding: 2rem 1rem;
  }
`
export const ContainerTecnology = styled.section`
  position: relative;
  margin: 4rem 0 6rem;
  background-color: rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 2rem 4rem;

  h2::after {
    width: 10%;
  }

  @media (max-width: 800px) {
    padding: 2.5rem 3rem;
  }
  @media (max-width: 500px) {
    padding: 2rem 1.5rem;
  }
`
export const Tecnology = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
  align-items: center;
  p {
    flex: 1;
    text-align: center;
    background-color: #243036;
    padding: 1rem 0;
    backdrop-filter: blur(4px);
    color: #f5f5f5;
    transition: 0.3s;
    &:hover {
      color: #4caf50;
    }
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const Descricao = styled.section`
  margin-top: 4rem;
  color: #f5f5f5;
  padding: 0 6rem;

  p {
    line-height: 2rem;
    margin-bottom: 1rem;
  }
  a {
    color: #4caf50;
    text-decoration: none;
    transition: 0.3s;

    &:hover {
      filter: brightness(50%);
    }
  }

  h2 {
    margin-bottom: 0.2rem;
  }

  pre {
    margin: 1rem 0;
    width: 100%;
    code {
      display: block;
      background-color: rgba(0, 0, 0, 0.5);
      border-radius: 0.2rem;
      padding: 0.8rem;
    }
  }

  div.flex {
    display: flex;
    justify-content: center;
    width: 60%;
    margin: 0 auto;

    a {
      & + a {
        margin-left: 1rem;
      }
    }
  }

  ul {
    margin: 0.6rem 0 1rem;
    list-style-type: square;
    margin-left: 1rem;
    li {
      code {
        color: #4caf50;
        margin-right: 0.6rem;
      }

      & + li {
        margin-top: 0.6rem;
      }
    }
  }

  div > img {
    margin-bottom: 1.5rem;
    & + img {
      margin-left: 1rem;
    }
  }

  @media (max-width: 800px) {
    padding: 0 2.5rem;
  }
  @media (max-width: 500px) {
    padding: 0 0rem;
  }
`

export const Publishers = styled.div`
  width: 50%;
  margin: 6rem auto 0;

  display: flex;
  justify-content: center;
  align-items: center;
  .storybook {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: #b1bdc4;
    box-shadow: inset 0px 2px 10px -2px #fb4985;
    transition: 0.3s;
    img {
      max-width: 50%;
    }

    &:hover {
      filter: brightness(80%);
    }
  }
  .github {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.25);
    box-shadow: inset 0px 2px 10px -2px #c4c4c4;
    transition: 0.3s;

    &:hover {
      filter: brightness(80%);
    }
  }
  .web {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background: #0b325a;
    box-shadow: inset 0px 2px 10px -2px #041322;
    transition: 0.3s;

    &:hover {
      filter: brightness(80%);
    }
  }

  a + a {
    margin-left: 33%;
  }

  @media (max-width: 800px) {
    margin: 3rem auto -3rem;
  }
  @media (max-width: 500px) {
    margin: 1.75rem auto -1.75rem;
  }
`
