import styled, { css } from 'styled-components'

type StyleHeadindProps = {
  slogan?: string
  left?: boolean
}

export const Wrapper = styled.div<StyleHeadindProps>`
  h2 {
    text-align: ${({ left }) => (left ? 'left' : 'center')};
    margin-top: 0.5rem;
    font-size: 1.1rem;
    font-weight: normal;
    letter-spacing: 0.15rem;
    color: #f5f5f5;
  }
  ${({ slogan, left }) =>
    slogan === '' || left
      ? css`
          h2 {
            &::after {
              content: '';
              width: ${() => (left ? '3.5rem' : '80%')};
              margin: ${() => (left ? '0.4rem 0 0' : '0.4rem auto 0')};
              height: 2px;
              display: block;
              background-color: #758496;
            }
          }
        `
      : css`
          p {
            font-family: Rozha One;
            font-weight: bold;
            font-size: 1rem;
            text-align: center;
            color: #4f565c;
            margin-top: 0.1rem;

            &::after {
              content: '';
              width: 60%;
              margin: ${() => (left ? '0' : '0 auto')};
              height: 2px;
              background-color: #4f565c;
              display: block;
              margin-top: 0.25rem;
            }
          }
        `}
`
