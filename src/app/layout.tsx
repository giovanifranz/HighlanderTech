import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import type { PropsWithChildren } from 'react'
import '@/styles/global.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

const inter = Inter({ subsets: ['latin'], fallback: ['sans-serif'] })

export const metadata: Metadata = {
  title: 'Highlander Tech',
  openGraph: {
    images: ['/social.jpg'],
  },
  creator: 'Highlander Tech',
  description:
    'Precisando de uma página para o seu negócio? Uma identidade visual? Talvez um setup novo? Aqui é o lugar.',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt-BR" className="scroll-smooth antialiased">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={
          inter.className + 'relative overflow-x-hidden bg-cyan-200 text-black'
        }
      >
        <Header />
        <div className="mt-16 flex h-full w-full flex-col items-center py-20 md:mt-0 md:pb-28 md:pt-24">
          {children}
        </div>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  )
}
