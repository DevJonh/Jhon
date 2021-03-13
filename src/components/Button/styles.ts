import styled from 'styled-components'

type ButtonProps = {
  medium: boolean
}

export const Button = styled.button<ButtonProps>`
  background: #243036;
  box-shadow: inset 0px -4px 4px -2px rgba(0, 0, 0, 0.25);
  border-radius: ${({ medium }) => (medium ? '4px' : '6px')};
  border: 3px solid #4caf50;

  height: ${({ medium }) => (medium ? '2.2rem' : '3.5rem')};

  width: ${({ medium }) => (medium ? '8.5rem' : '13.4rem')};
  max-width: 100%;
  margin: ${({ medium }) => (medium ? '1rem auto .3rem' : '3.4rem auto')};

  font-size: ${({ medium }) => (medium ? '.8rem' : '1rem')};
  color: #4caf50;
  font-weight: bold;
  letter-spacing: 0.05rem;

  cursor: pointer;
  transition: 1s all ease;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &::before {
    background: #4caf50;
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    width: 100%;
    height: 0%;
    transform: translate(-50%, -50%) rotate(45deg);
    transition: 0.6s all ease;
  }

  &:hover,
  &:focus {
    &::before {
      height: 400%;
    }
    color: #f5f5f5;
    z-index: 2;
  }
`
