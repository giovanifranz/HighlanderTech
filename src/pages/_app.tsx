import type { AppProps } from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'

import { Footer, Header } from '../components'
import { GlobalStyle } from '../styles'
import { Container } from '../styles'

import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/700.css'
import '@fontsource/inter/800.css'
import '@fontsource/inter/900.css'
import '../styles/nprogress.css'

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>HighlanderTech</title>
        <link rel="logo" href="/LogoHighlanderTech.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <GlobalStyle />
      <Header />
      <Container>
        <Component {...pageProps} />
      </Container>
      <Footer />
    </>
  )
}

export default App
