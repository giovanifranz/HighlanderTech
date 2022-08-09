import type { ReactNode } from 'react';

import { Seo } from 'components/atoms';
import { Footer } from 'components/molecules';
import { Header } from 'components/organisms';

import styles from './layout.module.css';

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <>
      <Seo />
      <Header />
      <div className={styles.wrapper}>{children}</div>
      <Footer />
    </>
  );
}

export { Layout };
