import { useCallback } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { useSelect } from 'hooks/useSelect';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Subtitle, Title } from 'components';

import styles from './card.module.css';

type Props = {
  title: string;
  subTitle: string;
  image: string;
  description: string;
  base64: string;
  type: Select;
  isRight?: boolean;
  isFirst?: boolean;
};

function Card({
  title,
  subTitle,
  image,
  description,
  type,
  isRight = false,
  isFirst = false,
  base64,
}: Props) {
  const { setSelect } = useSelect();
  const router = useRouter();

  const handleClick = useCallback(() => {
    setSelect(type);
    router.push('/contato');
  }, [router, setSelect, type]);

  return (
    <div className={`${styles.wrapper} ${!isRight && styles.reverse}`}>
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
        src={image}
        alt={title}
        height={540}
        width={540}
        blurDataURL={base64}
        placeholder="blur"
      />
    </div>
  );
}

export { Card };
export type { Props as FeatureProps };
