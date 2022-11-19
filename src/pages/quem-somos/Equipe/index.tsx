import { ExpertsCard } from './ExpertsCard';

import styles from './equipe.module.css';

export function Equipe() {
  return (
    <section className="mt-10 flex items-center">
      <div className={styles.wrapper}>
        <ExpertsCard
          name="Iago Paz"
          activity1="Design"
          activity2="Layout"
          activity3="Consultoria"
          activity4="Assistência"
          href="https://www.linkedin.com/in/iago-paz-2164a2220"
        />
        <span className="mx-10 h-10 w-10 rounded-full bg-cyan-400" />
        <ExpertsCard
          name="Giovani Franz"
          activity1="Desenvolvimento"
          activity2="Assistência"
          activity3="Layout"
          activity4="SEO"
          href="https://www.linkedin.com/in/giovanifranz"
        />
      </div>
    </section>
  );
}
