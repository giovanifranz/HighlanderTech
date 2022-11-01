import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Image from 'next/image';
import { useCallback } from 'react';
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
    <DropdownMenu.Item
      className="text-right text-gray-900 text-lg"
      onClick={handleClick}
    >
      <a>{label}</a>
    </DropdownMenu.Item>
  );
}

export default function Dropdown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="shadow-none focus:outline-0">
        <Image src="/svgs/menu.svg" width="40" height="20" alt="menu" />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="flex flex-col w-40 pt-8 pb-4 pr-6 bg-white gap-2">
          <MenuItem href="/" label="Home" />
          <MenuItem href="/quem-somos" label="Quem Somos" />
          <MenuItem href="/portfolio" label="Portfólio" />
          <MenuItem href="/contato" label="Contato" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
