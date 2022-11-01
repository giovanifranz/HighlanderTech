import { useWindowsSize } from 'hooks/useWindowsSize';
import dynamic from 'next/dynamic';

import { Logo } from '../Logo';

const Dropdown = dynamic(
  () => import(/* webpackChunkName: "Dropdown" */ './Dropdown'),
);

const Navigation = dynamic(
  () => import(/* webpackChunkName: "Navigation" */ './Navigation'),
);

function Header() {
  const width = useWindowsSize();
  return (
    <header className="top-0 inset-x-0 py-4 shadow-md flex items-center justify-center bg-white fixed z-50">
      <div className="w-11/12 md:w-4/5 max-w-7xl flex items-center justify-between mx-auto">
        <Logo />
        {width > 720 ? <Navigation /> : <Dropdown />}
      </div>
    </header>
  );
}

export { Header };
