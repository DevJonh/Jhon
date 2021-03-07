import styled from 'styled-components'

export const Wrapper = styled.section`
  margin-top: 5rem;
  padding: 2rem 5.5rem;
  &::before {
    content: '';
    width: 100%;
    height: 1px;
    background-color: #758496;
    display: block;
    margin-bottom: 2rem;
  }

  h2 {
    margin-top: 0.5rem;
    font-size: 1.1rem;
    font-weight: normal;
    letter-spacing: 0.15rem;
    color: #f5f5f5;
    text-align: center;
  }

  div.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 3.5rem;

    .about {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex: 1 1 40%;
      margin-right: 1.5rem;

      div {
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
            margin: 0 auto;
            height: 2px;
            background-color: #4f565c;
            display: block;
            margin-top: 0.25rem;
          }
        }
      }

      p {
        font-size: 0.9rem;
        text-align: center;
        line-height: 1.2rem;
        color: #f5f5f5;
        margin-top: 1.4rem;
      }

      &::after {
        content: '';
        width: 2px;
        height: 100%;
        display: inline-block;
        background-color: #758496;
        position: absolute;
        right: -1.5rem;
      }
    }

    .skills {
      display: flex;
      flex: 1 1 40%;
      flex-direction: column;
      align-items: center;
      margin-left: 1.5rem;

      h2 {
        ::after {
          content: '';
          width: 80%;
          margin: 0.4rem auto 0;
          height: 2px;
          display: block;
          background-color: #758496;
        }
      }

      ul {
        margin-top: 2.1rem;
        list-style: none;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 1rem;
        align-items: center;
        li {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          p {
            font-size: 1rem;
            margin-top: 0.2rem;
            color: #758496;
          }
        }
      }
    }

    .formation {
      width: 80%;
      flex: 1 1 80%;
      margin: 1.7rem auto;

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
        }
      }
    }
  }
`
