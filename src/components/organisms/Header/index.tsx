import { useWindowsSize } from 'hooks/useWindowsSize';
import dynamic from 'next/dynamic';

import { Logo } from 'components/atoms';

import styles from './header.module.css';

const Dropdown = dynamic<EmptyObject>(() =>
  import('../../molecules/Dropdown').then((mod) => mod.Dropdown),
);

const Navigation = dynamic<EmptyObject>(() =>
  import('../../atoms/Navigation').then((mod) => mod.Navigation),
);

function Header() {
  const width = useWindowsSize();
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Logo />
        {width > 720 ? <Navigation /> : <Dropdown />}
      </div>
    </header>
  );
}

export { Header };
