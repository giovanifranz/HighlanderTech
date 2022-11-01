import type { StaticImageData } from 'next/image';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  href: string;
  text: string;
  srcImage: StaticImageData;
  demo?: boolean;
};

function Card({ href, text, srcImage, demo = false }: Props) {
  return (
    <Link
      href={href}
      className="relative flex justify-center w-4/5 bg-center bg-cover max-w-[352px] h-52 rounded-3xl hover:opacity-75"
      style={{ backgroundImage: `url(${srcImage.src})` }}
    >
      <div className="absolute bottom-0 flex flex-col items-center w-full p-2 text-center bg-black/50 gap-2 rounded-b-3xl">
        <h2 className="text-2xl text-white">{text}</h2>
        {demo && (
          <span className="absolute text-lg text-white right-4 bottom-2">
            Demo
          </span>
        )}
        <Image src="/svgs/arrow.svg" alt="arrow" height={36} width={36} />
      </div>
    </Link>
  );
}

export { Card };
export type { Props as CardProps };
