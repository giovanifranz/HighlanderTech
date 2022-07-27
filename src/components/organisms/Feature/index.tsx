import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';

import { Subtitle, Title } from 'components/atoms';

import styles from './feature.module.css';

type Props = {
  title: string;
  subTitle: string;
  image: string;
  description: string;
  type: Select;
  isRight?: boolean;
  isFirst?: boolean;
};

function Feature({
  title,
  subTitle,
  image,
  description,
  type,
  isRight = false,
  isFirst = false,
}: Props) {
  return (
    <main className={`${styles.wrapper} ${!isRight && styles.reverse}`}>
      <article
        className={
          isFirst
            ? styles.article
            : `${styles.article} ${styles['others-articles']}`
        }
      >
        <Title text={title} />
        <Subtitle text={subTitle} />
        <p className={styles.text}>{description}</p>
        <Link href={`/contato?select=${type}`} passHref>
          <a className={isRight ? styles.right : styles.left}>
            <p>Solicite seu orçamento</p>{' '}
            <BsArrowRight size={22} className="mx-1 mt-1" />
          </a>
        </Link>
      </article>
      <Image
        priority={isFirst}
        loading={isFirst ? 'eager' : 'lazy'}
        src={image}
        alt={title}
        height={540}
        width={540}
      />
    </main>
  );
}

export { Feature };
export type { Props as FeatureProps };
