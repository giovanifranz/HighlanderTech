import { useCallback } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { useSelect } from 'hooks/useSelect';
import Image from 'next/image';
import { useRouter } from 'next/router';

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
  const { setSelect } = useSelect();
  const router = useRouter();

  const handleClick = useCallback(() => {
    setSelect(type);
    router.push('/contato');
  }, [router, setSelect, type]);

  return (
    <main className={`${styles.wrapper} ${!isRight && styles.reverse}`}>
      <article
        className={`${styles.article} ${
          !isFirst && styles['others-articles']
        } ${isRight ? 'md:text-right' : 'md:text-left'}`}
      >
        <Title text={title} isRight={isRight} />
        <Subtitle text={subTitle} isRight={isRight} />
        <p className={styles.text}>{description}</p>
        <button
          type="button"
          className={isRight ? styles.right : styles.left}
          onClick={handleClick}
        >
          <p>Solicite seu orçamento</p>{' '}
          <BsArrowRight size={22} className="mx-1 mt-1" />
        </button>
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
