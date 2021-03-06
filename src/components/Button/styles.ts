import styled from 'styled-components'

export const ButtonContainer = styled.button`
  transform: translate(-50%, -50%);
`
export const Button = styled.button`
  background: #243036;
  box-shadow: inset 0px -4px 4px -2px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  border: 3px solid #4caf50;

  height: 3.5rem;
  width: 50%;
  max-width: 13.4rem;
  margin: 3.4rem auto;

  font-size: 1rem;
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
      height: 380%;
    }
    color: #f5f5f5;
    z-index: 2;
  }
`
// color hover button 03488E
