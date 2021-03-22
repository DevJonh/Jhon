import styled from 'styled-components'

export const Wrapper = styled.section`
  overflow: hidden;
  position: relative;
  max-width: 100%;
  margin-top: 3.5rem;
  padding: 2rem 5.5rem;
  box-sizing: border-box;
  &::before {
    content: '';
    width: 100%;
    height: 1px;
    background-color: #758496;
    display: block;
    margin-bottom: 2rem;
  }

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 800px) {
    padding: 2rem 2rem;
    justify-content: center;
  }
  @media (max-width: 500px) {
    padding: 1.5rem 1.5rem;
    justify-content: center;
  }
`
export const Content = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 3.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 380px) {
    max-width: 370px;
    overflow: hidden;
    align-items: center;
  }
`
