import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: #243036;
  }

  html, body, #__next{
    height: 100%;
  }

  body{
    font-family: Roboto, sans-serif;
  }
`
export default GlobalStyle
