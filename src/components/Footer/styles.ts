import styled, { css } from 'styled-components'

type FooterStylesProps = {
  inverter: boolean
}

export const Wrapper = styled.footer<FooterStylesProps>`
  position: relative;
  ${({ inverter }) =>
    !inverter
      ? css`
          background-color: rgba(0, 0, 0, 0.25);
        `
      : css`
          background-color: #243036;
        `}
  height: 15rem;
  padding-top: 4rem;
`
export const Copy = styled.div<FooterStylesProps>`
  position: relative;
  margin: 1.4rem auto;

  text-align: center;

  ${({ inverter }) =>
    !inverter
      ? css`
          background-color: #243036;
        `
      : css`
          background-color: rgba(0, 0, 0, 0.25);
          padding-top: 6rem;
          margin-top: -4rem;
        `}

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
