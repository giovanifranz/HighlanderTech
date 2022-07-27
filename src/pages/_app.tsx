import { SelectProvider } from 'hooks/useSelect';
import type { AppProps } from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';

import { Layout } from 'components/templates';

import 'react-toastify/dist/ReactToastify.css';
import '../styles/nprogress.css';
import '../styles/global.css';

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function App({ Component, pageProps }: AppProps) {
  return (
    <SelectProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SelectProvider>
  );
}

export default App;
