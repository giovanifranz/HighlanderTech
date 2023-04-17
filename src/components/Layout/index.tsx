import type { HtmlHTMLAttributes } from 'react'
import { Seo } from 'components'
import { Footer } from './Footer'
import { Header } from './Header'

type Props = HtmlHTMLAttributes<HTMLDivElement>

function Layout({ children, className }: Props) {
  return (
    <div className={className}>
      <Seo />
      <Header />
      <div className="mt-16 flex h-full w-full flex-col items-center py-20 md:mt-0 md:pb-28 md:pt-24">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export { Layout }
