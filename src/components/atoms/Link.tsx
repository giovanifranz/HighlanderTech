import type { PropsWithChildren } from 'react';
import NextLink from 'next/link';

type Props = PropsWithChildren<{
  href: string;
  target?: string;
}>;

function Link({ href, target, children }: Props) {
  return (
    <NextLink href={href} passHref>
      <a
        rel="noreferrer"
        target={target}
        className="transition-all hover:opacity-70"
      >
        {children}
      </a>
    </NextLink>
  );
}

export { Link };
export type { Props as LinkProps };
