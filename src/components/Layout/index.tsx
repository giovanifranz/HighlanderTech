import type { ReactNode } from 'react';

import { Seo } from 'components';
import { Footer } from './Footer';
import { Header } from './Header';

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <>
      <Seo />
      <Header />
      <div className="h-full w-full py-20 md:pt-24 md:pb-28 mt-16 md:mt-0 flex flex-col items-center">
        {children}
      </div>
      <Footer />
    </>
  );
}

export { Layout };
