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
      className="relative flex h-52 w-4/5 max-w-[352px] justify-center rounded-3xl bg-cover bg-center hover:opacity-75"
      style={{ backgroundImage: `url(${srcImage.src})` }}
    >
      <div className="absolute bottom-0 flex w-full flex-col items-center gap-2 rounded-b-3xl bg-black/50 p-2 text-center">
        <h2 className="text-2xl text-white">{text}</h2>
        {demo && (
          <span className="absolute right-4 bottom-2 text-lg text-white">
            Demo
          </span>
        )}
        <Image src="/svgs/arrow.svg" alt="" height={36} width={36} />
      </div>
    </Link>
  );
}

export { Card };
export type { Props as CardProps };
