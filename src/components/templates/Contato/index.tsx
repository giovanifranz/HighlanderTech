import { Formulario } from 'components/molecules';
import { Cards } from 'components/organisms/Cards';

import styles from './contato.module.css';

function Contato() {
  return (
    <div className={styles.wrapper}>
      <Formulario />
      <Cards />
    </div>
  );
}

export { Contato };
