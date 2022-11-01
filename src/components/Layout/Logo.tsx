import Link from 'next/link';
import Image from 'next/image';

function Logo() {
  return (
    <Link href="/">
      <Image
        src="/svgs/logo.svg"
        alt="Highlander Tech"
        width="195"
        height="30"
      />
    </Link>
  );
}

export { Logo };
