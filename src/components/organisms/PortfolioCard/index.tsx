import type { StaticImageData } from 'next/image';
import Link from 'next/link';

import { Arrow } from './Arrow';
import styles from './portfiolioCard.module.css';

type Props = {
  href: string;
  text: string;
  srcImage: StaticImageData;
  demo?: boolean;
};

function PortfolioCard({ href, text, srcImage, demo = false }: Props) {
  return (
    <Link href={href} passHref>
      <a
        className={styles['anchor-wrapper']}
        style={{ backgroundImage: `url(${srcImage.src})` }}
      >
        <div className={styles.wrapper}>
          <h2 className="text-2xl text-white">{text}</h2>
          {demo && <span className={styles.span}>Demo</span>}
          <Arrow />
        </div>
      </a>
    </Link>
  );
}

export { PortfolioCard };
export type { Props as PortfolioCardProps };
