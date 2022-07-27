import { SelectProvider } from 'hooks/useSelect';
import type { AppProps } from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';

import { Layout } from 'components/templates';

import 'react-toastify/dist/ReactToastify.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import '@fontsource/inter/900.css';
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
