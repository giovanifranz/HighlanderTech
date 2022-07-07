import { ReactNode } from 'react';
import NextLink from 'next/link';

interface Props {
  href: string;
  children: ReactNode;
}

function Link({ href, children }: Props) {
  return (
    <NextLink href={href} passHref>
      <a rel="noreferrer" target="_blank">
        {children}
      </a>
    </NextLink>
  );
}

export { Link };
export type { Props as LinkProps };
