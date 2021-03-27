import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  flex: 1;
  margin: 3rem auto;
  h2 {
    margin-top: 0.5rem;
    font-size: 1.1rem;
    font-weight: normal;
    letter-spacing: 0.15rem;
    color: #f5f5f5;
    text-align: center;
  }

  img {
    position: absolute;
    left: 0;
    right: -100px;
    bottom: -250px;
    width: 100vw;
    max-width: 100%;
    height: 100vh;
    mix-blend-mode: lighten;
    filter: blur(0.9px);
  }
  img:nth-child(2) {
    top: 30px;
    z-index: -2;
  }

  .container-history {
    position: relative;
    margin-top: 3rem;
  }

  .history {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1rem 1fr;
    grid-template-areas: 'form icon vazio';
    gap: 1.5rem;

    &:nth-child(even) {
      grid-template-areas: 'vazio icon form';
      div {
        text-align: left;
      }
    }

    div.container-marker {
      position: relative;
      grid-area: icon;
      span.marker {
        display: block;
        width: 0.7rem;
        height: 0.7rem;
        border-radius: 50%;
        background-color: #4caf50;
      }
      ::after {
        content: '';
        width: 3px;
        height: 100%;
        background-color: #4caf5055;
        border-radius: 2px;
        position: absolute;
        top: 2px;
        left: 25%;
        right: 50%;
      }
    }

    div {
      display: flex;
      flex-direction: column;
      text-align: right;
      grid-area: form;
      strong {
        color: #4caf50;
      }
      span {
        color: #f5f5f5;
        font-weight: bold;
        letter-spacing: 0.1rem;
        font-size: 0.8rem;
        margin: 0.2rem 0 0.5rem 0;
      }
      p {
        font-size: 0.9rem;
        line-height: 1.5rem;
        letter-spacing: 0.1rem;
        color: #f5f5f5;
      }
      p.course {
        color: #758496;
      }
    }
  }

  @media (max-width: 500px) {
    img {
      width: 100%;
    }

    .history + .history {
      margin-top: 2.5rem;
    }
    .history {
      gap: 0.5rem;
      position: relative;
      grid-template-columns: 1fr 1rem;
      grid-template-areas: 'form icon';
      div.container-marker {
        width: 100%;
        span.marker {
          display: block;
          width: 0.7rem;
          height: 0.7rem;
          border-radius: 50%;
          background-color: #4caf50;
          position: absolute;
          right: 0.5rem;
        }
        ::after {
          content: '';
          width: 3px;
          height: 100%;
          background-color: #4caf5055;
          border-radius: 2px;
          position: absolute;
          top: 2px;
          right: 0.7rem;
          left: auto;
        }
      }
    }
    .history:nth-child(even) {
      gap: 0.5rem;
      position: relative;
      grid-template-columns: 1rem 1fr;
      grid-template-areas: 'icon form';
      position: relative;
      div.container-marker {
        width: 100%;
        span.marker {
          display: block;
          width: 0.7rem;
          height: 0.7rem;
          border-radius: 50%;
          background-color: #4caf50;
          position: absolute;
          right: 0.5rem;
        }

        ::after {
          content: '';
          width: 3px;
          height: 100%;
          background-color: #4caf5055;
          border-radius: 2px;
          position: absolute;
          top: 2px;
        }
      }
    }
  }
`
