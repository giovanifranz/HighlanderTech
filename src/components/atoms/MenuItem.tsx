import { useCallback } from 'react';
import { Disclosure } from '@headlessui/react';
import { useRouter } from 'next/router';

type Props = {
  href: string;
  label: string;
};

function MenuItem({ href, label }: Props) {
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push(href);
  }, [href]);

  return (
    <Disclosure.Button
      as="a"
      className="py-2 pl-4 text-sm text-left text-gray-900 leading-5 hover:bg-gray-100 hover:text-gray-700"
      onClick={() => handleClick()}
    >
      {label}
    </Disclosure.Button>
  );
}

export { MenuItem };
