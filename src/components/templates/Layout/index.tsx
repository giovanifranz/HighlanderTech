import type { ReactNode } from 'react';
import Head from 'next/head';

import { Footer, Header } from 'components/molecules';

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
      </Head>
      <Header />
      <main className={styles.wrapper}>{children}</main>
      <Footer />
    </>
  );
}

export { Layout };
