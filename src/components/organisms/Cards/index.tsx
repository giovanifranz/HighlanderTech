import { Subtitle } from 'components/atoms';

import { useSelect } from '../../../hooks/useSelect';
import { modelsContatos, SUA_DUVIDA } from '../../molecules';

import styles from './cards.module.css';

export function Cards() {
  const { select } = useSelect();

  return (
    <section className={styles.wrapper}>
      <Subtitle text="Lembre-se de informar:" />
      <div className={styles.cards}>
        {modelsContatos[select][0]}
        {modelsContatos[select][1]}
        {SUA_DUVIDA}
      </div>
    </section>
  );
}
