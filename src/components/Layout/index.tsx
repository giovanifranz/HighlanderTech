import type { ReactNode } from 'react'

import { Seo } from 'components'
import { Footer } from './Footer'
import { Header } from './Header'

type Props = {
  children: ReactNode
}

function Layout({ children }: Props) {
  return (
    <>
      <Seo />
      <Header />
      <div className="mt-16 flex h-full w-full flex-col items-center py-20 md:mt-0 md:pt-24 md:pb-28">
        {children}
      </div>
      <Footer />
    </>
  )
}

export { Layout }
