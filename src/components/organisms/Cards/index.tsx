import { useEffect, useState } from 'react';

import { Subtitle } from 'components/atoms';

import { useSelect } from '../../../hooks/useSelect';
import { Formulario, modelsContatos, SUA_DUVIDA } from '../../molecules';

import styles from './cards.module.css';

export function Cards() {
  const [FirstCard, setFirstCard] = useState(modelsContatos.sites[0]);
  const [SecondCard, setSecondCard] = useState(modelsContatos.sites[1]);

  const { select } = useSelect();

  useEffect(() => {
    setFirstCard(modelsContatos[select][0]);
    setSecondCard(modelsContatos[select][1]);
  }, [select]);

  return (
    <main className={styles.container}>
      <Formulario />
      <section className={styles.wrapper}>
        <Subtitle text="Lembre-se de informar:" />
        <div className={styles.cards}>
          {FirstCard}
          {SecondCard}
          {SUA_DUVIDA}
        </div>
      </section>
    </main>
  );
}
