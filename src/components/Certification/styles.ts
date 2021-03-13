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
  height: 250px;
  overflow: hidden;
  div {
    height: 250px;
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
    margin-left: -4%;
    margin-right: -6%;
    width: 100%;
    height: 100%;

    //margin: 0 4.5rem;

    div {
      position: relative;
    }

    &.active {
      margin-left: -1.4rem;
      &:hover {
        transform: translateX(0px);
        cursor: pointer;
      }
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
    margin: 2rem 12rem;
  }
`
