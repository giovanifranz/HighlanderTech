import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR" className="scroll-smooth antialiased">
        <Head>
          <meta name="theme-color" content="#F3FEFF" />
        </Head>
        <body className="relative overflow-x-hidden bg-cyan-200 text-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
