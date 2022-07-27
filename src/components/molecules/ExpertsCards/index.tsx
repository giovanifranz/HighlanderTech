import { TiSocialLinkedinCircular } from 'react-icons/ti';

import { Link } from '../../atoms';

import styles from './experts-cards.module.css';

type Props = {
  name: string;
  activity1: string;
  activity2: string;
  activity3: string;
  activity4: string;
  href: string;
};

function ExpertsCard({
  name,
  activity1,
  activity2,
  activity3,
  activity4,
  href,
}: Props) {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{name}</h1>
      <ul className={styles.list}>
        <div>
          <li>{activity1}</li>
          <li>{activity2}</li>
        </div>
        <div>
          <li>{activity3}</li>
          <li>{activity4}</li>
        </div>
      </ul>
      <Link href={href} target="_blank">
        <TiSocialLinkedinCircular size="100" className={styles.icon} />
      </Link>
    </div>
  );
}

export { ExpertsCard };
