import { TiSocialLinkedinCircular } from 'react-icons/ti';

import { Link } from '../../../components';

import styles from './equipe.module.css';

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
    <div className="flex h-64 w-60 flex-col items-center justify-center rounded-2xl bg-cyan-400">
      <h1 className="text-lg font-bold text-purple-500">{name}</h1>
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
        <TiSocialLinkedinCircular size="100" className="text-purple-500" />
      </Link>
    </div>
  );
}

export { ExpertsCard };
