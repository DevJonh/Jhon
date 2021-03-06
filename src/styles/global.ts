import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: #243036;

    &.sb-show-main.sb-main-padded{
      padding:0
    }
  }

  html, body, #__next{
    height: 100%;
  }

  body{
    font-family: Roboto, sans-serif;
  }

  @media (max-width: 768px){
    html{
      font-size: 90%;
    }
  }
  @media (max-width: 460px){
    html{
      font-size: 80%;
    }
  }
`
export default GlobalStyle
