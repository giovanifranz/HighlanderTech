import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta name="theme-color" content="#F3FEFF" />
          <meta
            name="Descrição"
            content="Precisando de uma página para o seu negócio? Uma página com a sua
            identidade, integrado com seu e-mail comercial ajuda a alavancar
            suas conversões, além de ser muito mais profissional."
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
