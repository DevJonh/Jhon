import styled, { keyframes } from 'styled-components'

const slideIn = keyframes`
  from{
    display: none;
    transform: translateX(1000px)
  }
  to{
    display: flex;
    transform: translateX(0)
  }
`
const slideOut = keyframes`
  from{
    transform: translateX(0)
  }
  to{
    transform: translateX(1000px)
  }
`
const pulse = keyframes`
  0% {
    opacity:0
  }
  100% {
   opacity: 1
  }
`

export const Wrapper = styled.header`
  background: url('/img/bg-header.png') no-repeat center;
  mix-blend-mode: lighten;
  color: #f5f5f5;
  width: 100%;
  padding: 0 6rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  @media (max-width: 800px) {
    padding: 0 4%;
    height: 75%;
  }
`
export const Logo = styled.img`
  max-width: 100%;
  width: 6rem;
  margin-right: 3rem;
`

export const Nav = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 3.6rem;
  width: 100%;
  svg {
    display: none;
  }

  @media (max-width: 800px) {
    svg {
      cursor: pointer;
      transition: 0.3s;
      animation: ${pulse} 1s linear;
      display: block;

      position: absolute;
      right: 0;

      z-index: 6;
      transition: 0.3s;

      &:hover {
        color: #4caf50;
      }
    }
  }
`

export const Menu = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  width: 35rem;

  li a {
    text-decoration: none;
    color: #f5f5f5;
    font-size: 0.95rem;
    letter-spacing: 0.05rem;
    transition: 0.3s;

    &::after {
      content: '';
      display: block;
      width: 0;
      height: 2px;
      margin-top: 6px;
      border-radius: 3px;
      transition: 0.4s;
    }

    &:hover {
      color: #4caf50;

      &::after {
        width: 100%;
        background-color: #4caf50;
      }
    }
  }

  @media (max-width: 800px) {
    position: absolute;
    background-color: #243036;
    width: 100vw;
    height: 100vh;
    top: 10px;
    bottom: 0;
    left: -5%;
    right: 6%;
    z-index: 5;
    &.isActive {
      display: flex;
      opacity: 1;
      animation: ${slideIn} 0.3s linear;
    }

    &.isClosed {
      animation: ${slideOut} 0.3s linear;
      transform: translateX(1000px);
    }

    flex-direction: column-reverse;
    justify-content: flex-end;
    transform: translateX(0);
    li {
      margin-top: 4rem;
      width: 90%;
      text-align: center;
      align-content: center;
      border-bottom: 1px solid #758496;
    }
  }
`
export const TitleContainer = styled.div`
  margin-top: 14rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    margin-top: 12rem;
  }
`
