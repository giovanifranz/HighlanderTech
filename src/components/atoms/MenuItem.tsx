import { useCallback } from 'react';
import { DropdownMenuItem } from '@radix-ui/react-dropdown-menu';
import { useRouter } from 'next/router';

type Props = {
  href: string;
  label: string;
};

function MenuItem({ href, label }: Props) {
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push(href);
  }, [href, router]);

  return (
    <DropdownMenuItem
      className="text-sm text-right text-gray-900"
      onClick={() => handleClick()}
    >
      <a>{label}</a>
    </DropdownMenuItem>
  );
}

export { MenuItem };
