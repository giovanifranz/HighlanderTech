import type { AppProps } from 'next/app'
import { GlobalStyle } from '../styles'
import { Footer, Header } from '../components'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/700.css'
import '@fontsource/inter/800.css'
import '@fontsource/inter/900.css'
import { Container } from '../styles'
import Head from 'next/head'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>HighlanderTech</title>
      </Head>
      <Header />
      <Container>
        <Component {...pageProps} />
        <GlobalStyle />
      </Container>
      <Footer />
    </>
  )
}

export default MyApp
