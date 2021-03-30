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

  html{
    scroll-behavior: smooth;
  }

  html, body, #__next{
    height: 100%;
  }

  body{
    font-family: Roboto, sans-serif;
  }


  @media (max-width: 800px){
    html{
      font-size: 90%;
    }
  }
  @media (max-width: 500px){
    html{
      font-size: 87%;
    }
  }
`
export default GlobalStyle
