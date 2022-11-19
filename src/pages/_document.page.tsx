import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR" className="scroll-smooth antialiased">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <meta name="theme-color" content="#F3FEFF" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700;800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="relative overflow-x-hidden bg-cyan-200 text-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
