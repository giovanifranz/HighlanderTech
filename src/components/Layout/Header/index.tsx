import { useWindowsSize } from 'hooks/useWindowsSize'
import dynamic from 'next/dynamic'

import { Logo } from '../Logo'

const Dropdown = dynamic(
  () => import(/* webpackChunkName: "Dropdown" */ './Dropdown'),
)

const Navigation = dynamic(
  () => import(/* webpackChunkName: "Navigation" */ './Navigation'),
)

function Header() {
  const width = useWindowsSize()
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-center bg-white py-4 shadow-md">
      <div className="mx-auto flex w-11/12 max-w-7xl items-center justify-between md:w-4/5">
        <Logo />
        {width > 720 ? <Navigation /> : <Dropdown />}
      </div>
    </header>
  )
}

export { Header }
