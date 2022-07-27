import { Formulario } from 'components/molecules';
import { Cards } from 'components/organisms/Cards';

import styles from './contato.module.css';

function Contato() {
  return (
    <main className={styles.wrapper}>
      <Formulario />
      <Cards />
    </main>
  );
}

export { Contato };
