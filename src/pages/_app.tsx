import { AppProps } from 'next/app'
import Head from 'next/head'
import NextProgress from 'nextjs-progressbar'
import GlobalStyle from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <meta
          name="description"
          content="Meu site pessoal para apresentar meu conhecimento, aprendizado e evolução."
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092b" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Rozha+One&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      <NextProgress
        color="#4BAE50"
        startPosition={0.3}
        stopDelayMs={200}
        height={2}
      />
      <Component {...pageProps} />
    </>
  )
}

export default App
