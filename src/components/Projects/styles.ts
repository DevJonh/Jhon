import styled from 'styled-components'

export const Wrapper = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.25);
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  z-index: -1;
`

export const BoxProjects = styled.div`
  text-align: left;
  background-color: #243036;
  padding: 1.5rem 1rem;
  border-radius: 0.3rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    background-color: #888;
    border-radius: 0.2rem;
    width: 100%;
  }
  div:nth-child(2) {
    background-color: rgba(0, 0, 0, 0.25);
    color: #f5f5f5;
    border-radius: 0.2rem;
    margin-top: 1.3rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;

    p {
      max-width: 100%;
      margin-top: 0.6rem;
      line-height: 1.6rem;
    }
  }
  @media (max-width: 800px) {
    padding: 1rem 0.7rem;
    img {
      height: 100%;
    }
  }
  @media (max-width: 500px) {
    width: 75%;
    margin: 0 3.6rem;
  }
`

export const ContainerProjects = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  position: relative;

  column-gap: 1.5rem;
  row-gap: 1.5rem;

  div.pagination {
    position: absolute;
    top: -2.5rem;
    right: 0;
    button {
      border-radius: 0.2rem;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 1.2rem;
      height: 1.5rem;
      background: none;
      border: none;
      color: #f5f5f5;
      right: 0;
      transition: 0.3s;
      cursor: pointer;
      & + button {
        margin-left: 0.5rem;
      }
      &.disabled {
        color: #444;
        cursor: initial;
        outline: none;

        &:hover {
          background: none;
        }
      }

      :hover {
        background-color: rgba(0, 0, 0, 0.3);
      }
    }
  }
  div.pagination-bottom {
    position: absolute;
    bottom: -3rem;
    margin-bottom: 1rem;
    button {
      border-radius: 0.2rem;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 1.3rem;
      height: 1.5rem;
      background: none;
      border: none;
      color: #f5f5f5;
      left: 0;
      cursor: pointer;
      padding: 2rem auto auto;
      transition: 0.3s;
      & + button {
        margin-left: 0.5rem;
      }
      svg {
        margin: auto;
      }

      &.disabled {
        color: #444;
        cursor: initial;
        outline: none;
        &:hover {
          background: none;
        }
      }

      :hover {
        background-color: rgba(0, 0, 0, 0.3);
      }
    }
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
    row-gap: 2rem;
    margin-bottom: 1.2rem;
  }
`
