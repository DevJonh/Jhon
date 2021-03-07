import styled from 'styled-components'

type TitleProps = {
  left: boolean
}

export const Title = styled.h1<TitleProps>`
  font-family: 'Rozha One', serif;
  letter-spacing: 0.1rem;
  font-size: 1.8rem;
  text-align: ${({ left }) => (left ? 'left' : 'center')};
  width: 100%;
  margin: ${({ left }) => (left ? '0 0' : '0 auto')};
  color: #f5f5f5;
`
