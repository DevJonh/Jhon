import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  margin: 0 auto;
  transition: all 0.3s;
  div {
    border-radius: 15px;
  }
  img.detail {
    position: absolute;
    left: -1rem;
    bottom: 2rem;
    transform: rotate(-46deg);
  }
`

export const ContainerImage = styled.div`
  width: 100%;
  height: 17.5rem;
  overflow: hidden;
  div {
    width: 100%;
    height: 17.5rem;
  }

  filter: blur(2px);
  transition: all 0.3s;

  &.active {
    transform: translateZ(200px);
    z-index: 1;
    box-shadow: 0 0 20px 4px rgba(0, 0, 0, 0.5);
    filter: blur(0);
    position: relative;
    transition: all 0.3s;
    img {
      display: flex;
      flex: 1;
      max-width: 100%;
    }
    &:hover {
      transform: translateX(60px);
      cursor: pointer;
    }
  }

  &:hover {
    filter: blur(0px);
    z-index: 5;
    box-shadow: 0 0 20px 4px rgba(0, 0, 0, 0.7);
    cursor: pointer;

    *.active {
      filter: blur(4px);
    }
  }

  img {
    max-width: 100%;
  }

  @media (max-width: 800px) {
    margin-left: -2%;
    margin-right: -2%;
    & + div {
      margin-left: -4%;
    }
    width: 100%;
    height: 18rem;
    div {
      height: 18rem;
    }

    &:hover {
      box-shadow: 0 0 15px -2px rgba(0, 0, 0, 0.2);
    }
    &.active {
      box-shadow: 0 0 20px 4px rgba(0, 0, 0, 0.2);
      &:hover {
        transform: translateX(20px);
      }
    }
  }

  @media (max-width: 500px) {
    width: 100%;
    div {
      position: relative;
    }

    &.active {
      margin-left: 0rem;
      &:hover {
        transform: translateX(0px);
        cursor: pointer;
      }
    }
  }

  @media (max-width: 375px) {
    width: 100%;
    img {
      width: 100%;
      margin: 0 auto;
    }
    div {
      width: 100%;
    }

    &.active {
      margin-left: 0rem;
    }
  }
`

export const SlideStyle = styled.div`
  width: 5%;
  display: flex;
  margin: 2rem auto;
  justify-content: space-between;
  align-items: center;

  button {
    width: 10px;
    height: 10px;
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    border-radius: 50%;
    &.focus {
      width: 16px;
      height: 16px;
      cursor: initial;
      ::after {
        content: '';
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #243036;
        display: block;
      }
    }
  }

  @media (max-width: 800px) {
    width: 8%;
  }

  @media (max-width: 500px) {
    width: 25%;
    &.focus::after {
      margin: 2rem 12rem;
    }
  }
  @media (max-width: 375px) {
    &.focus::after {
      margin: 2rem 4rem;
    }
  }
`
