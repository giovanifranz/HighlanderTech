import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'
import Router from 'next/router'
import NProgress from 'nprogress'
import { useEffect } from 'react'
import { Layout } from 'components'
import { Inter } from '@next/font/google'
import { trpc } from 'utils/trpc'

import 'react-toastify/dist/ReactToastify.css'
import 'styles/nprogress.css'
import 'styles/global.css'
import { axeAccessibilityReporter } from 'utils/axeAccessibilityReporter'
import Head from 'next/head'

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export const inter = Inter({
  weight: ['500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    axeAccessibilityReporter()
  }, [])

  return (
    <>
      <Head>
        <title>Highlander Tech</title>
      </Head>
      <Layout className={inter.className}>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </>
  )
}

export default trpc.withTRPC(MyApp)
