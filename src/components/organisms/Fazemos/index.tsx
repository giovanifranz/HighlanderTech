import Image from 'next/image';

import { Subtitle, Title } from 'components/atoms';

import styles from './fazemos.module.css';

export function Fazemos() {
  return (
    <section className={styles.about}>
      <Image
        src="/quem-somos/about.png"
        priority
        loading="eager"
        alt="Sobre"
        width={400}
        height={375}
      />
      <article className={styles.article}>
        <Title text="A Highlander Tech" />
        <Subtitle text="O que nós fazemos?" />
        <p className={styles.text}>
          A Highlander Tech é uma empresa que presta serviços de montagem e
          manutenção de computadores, completo com consultoria, além da criação
          de sites para pequenos negócios que querem entrar entrar no mundo
          digital.
          <br />
          <br />
          Nossa empresa preza o relacionamento pessoal com o cliente, criando
          conteúdo e oferecendo produtos que, ao mesmo tempo que suprem a
          necessidade, manifestam a identidade do cliente.
        </p>
      </article>
    </section>
  );
}
