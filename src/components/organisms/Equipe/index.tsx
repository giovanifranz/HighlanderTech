import { ExpertsCard } from 'components/molecules/ExpertsCards';

import styles from './equipe.module.css';

export function Equipe() {
  return (
    <section className={styles.equipe}>
      <span className={styles.ball} />
      <span className={styles.ball} />
      <span className={styles.ball} />
      <span className={styles.ball} />
      <span className={styles.ball} />
      <span className={styles.ball} />
      <div className={styles.wrapper}>
        <ExpertsCard
          name="Iago Paz"
          activity1="Design"
          activity2="Layout"
          activity3="Consultoria"
          activity4="Assistência"
          href="https://www.linkedin.com/in/iago-paz-2164a2220/"
        />
        <span className={styles.ball} />
        <ExpertsCard
          name="Giovani Franz"
          activity1="Desenvolvimento"
          activity2="Assistência"
          activity3="Layout"
          activity4="SEO"
          href="https://www.linkedin.com/in/giovanifranz"
        />
      </div>
      <span className={styles.ball} />
      <span className={styles.ball} />
      <span className={styles.ball} />
      <span className={styles.ball} />
      <span className={styles.ball} />
      <span className={styles.ball} />
    </section>
  );
}
