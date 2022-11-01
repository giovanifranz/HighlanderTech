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
    <div className="w-60 h-64 bg-cyan-400 rounded-2xl flex flex-col items-center justify-center">
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
