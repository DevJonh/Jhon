import styled from 'styled-components'

export const Wrapper = styled.header`
  position: absolute;
  top: 0;
  background: url('/img/bg-header.png') no-repeat center;
  color: #fff;
  width: 100%;
  height: 100%;
  max-height: 55rem;
  padding: 0 6rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`
export const Logo = styled.img`
  max-width: 100%;
  width: 6rem;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 3.6rem;
  width: 100%;
`

export const Menu = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  width: 50%;

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
`
export const TitleContainer = styled.div`
  margin-top: 18rem;
  display: flex;
  flex-direction: column;
`
