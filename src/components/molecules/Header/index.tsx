import { Link, Logo } from '../../atoms';

import styles from './header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Logo />
        <nav className={styles.navbar}>
          <Link href="/">Home</Link>
          <Link href="/quem-somos">Quem Somos</Link>
          <Link href="/contato">Contato</Link>
        </nav>
      </div>
    </header>
  );
}

export { Header };
