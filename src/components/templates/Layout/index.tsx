import type { ReactNode } from 'react';
import Head from 'next/head';

import { Footer } from 'components/molecules';
import { Header } from 'components/organisms';

import styles from './layout.module.css';

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <title>HighlanderTech</title>
        <link rel="manifest" href="/manifest.json" />
        <meta
          property="og:image"
          content="https://www.highlandertech.com.br/social.jpg"
        />
      </Head>
      <Header />
      <main className={styles.wrapper}>{children}</main>
      <Footer />
    </>
  );
}

export { Layout };
