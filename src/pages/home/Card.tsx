import { useCallback } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { useSelect } from 'hooks/useSelect';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Subtitle, Title } from 'components';

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
    <section
      className={`${'w-11/12 md:max-w-6xl mx-0 flex justify-between items-center gap-2 md:gap-12 flex-col md:flex-row'} ${
        !isRight && 'md:flex-row-reverse'
      }`}
    >
      <article
        className={`w-11/12 md:w-[560px] md:p-10 relative md:-mt-20 text-center flex flex-col items-center md:block ${
          isFirst && 'mt-8 md:mt-0'
        } ${isRight ? 'md:text-right' : 'md:text-left'}`}
      >
        <header>
          <Title text={title} isRight={isRight} />
          <Subtitle text={subTitle} isRight={isRight} />
        </header>
        <p className={'my-8 md:mb-0 text-lg'}>{description}</p>
        <button
          type="button"
          className={`text-lg text-purple-500 font-semibold md:absolute flex items-center justify-center mb-8 md:mb-0 mt-2 hover:opacity-70 transition-all hover:cursor-pointer ${
            isRight
              ? 'text-left right-0 md:pr-10'
              : 'text-right left-0 md:pl-10'
          }`}
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
    </section>
  );
}

export { Card };
export type { Props as FeatureProps };
