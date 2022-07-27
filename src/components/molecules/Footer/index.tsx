import {
  RiFacebookFill,
  RiInstagramFill,
  RiWhatsappFill,
} from 'react-icons/ri';

import { Link, Logo } from '../../atoms';

import styles from './footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <nav className={styles.navbar}>
          <Logo />
          <Link
            href="https://api.whatsapp.com/send?phone=555199188952"
            target="_blank"
          >
            <RiWhatsappFill className={styles.icon} />
          </Link>
          <Link
            href="https://www.instagram.com/highlandertechbr/"
            target="_blank"
          >
            <RiInstagramFill className={styles.icon} target="_blank" />
          </Link>
          <Link href="https://www.facebook.com/Highlandertech" target="_blank">
            <RiFacebookFill className={styles.icon} />
          </Link>
        </nav>
        <p className={styles.text}>
          HIGHLANDER COMERCIO VAREJISTA E DESENVOLVIMENTO DE SOFTWARES LTDA
          <br />
          CNPJ 42.295.929/0001-35
        </p>
      </div>
    </footer>
  );
}

export { Footer };
