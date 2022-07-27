import { Menu, Transition } from '@headlessui/react';

import { Link } from './Link';

type Props = {
  href: string;
  label: string;
};

function MenuItem({ href, label }: Props) {
  return (
    <Menu.Item>
      {({ active }) => (
        <div
          className={`${
            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
          } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
        >
          <Link href={href}>{label}</Link>
        </div>
      )}
    </Menu.Item>
  );
}

function Dropdown() {
  return (
    <div className="flex items-center justify-center p-12">
      <div className="relative inline-block text-left">
        <Menu>
          {({ open }) => (
            <>
              <span className="rounded-md shadow-sm">
                <Menu.Button className="transition duration-150 ease-in-out focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="20"
                    fill="none"
                    viewBox="0 0 41 24"
                  >
                    <rect
                      width="40"
                      height="5"
                      x="0.16"
                      y="0.229"
                      fill="#753BBD"
                      rx="2.5"
                    />
                    <rect
                      width="40"
                      height="5"
                      x="0.16"
                      y="9.229"
                      fill="#753BBD"
                      rx="2.5"
                    />
                    <rect
                      width="40"
                      height="5"
                      x="0.16"
                      y="18.229"
                      fill="#753BBD"
                      rx="2.5"
                    />
                  </svg>
                </Menu.Button>
              </span>
              <Transition
                show={open}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  static
                  className="absolute right-0 w-56 mt-2 bg-white border border-gray-200 shadow-lg outline-none origin-top-right divide-y divide-gray-100 rounded-md"
                >
                  <div className="py-1">
                    <MenuItem href="/" label="Home" />
                    <MenuItem href="/quem-somos" label="Quem Somos" />
                    <Menu.Item
                      as="span"
                      disabled
                      className="flex justify-between w-full px-4 py-2 text-sm text-left text-gray-700 opacity-50 cursor-not-allowed leading-5"
                    >
                      Portfólio (Em construção)
                    </Menu.Item>
                    <MenuItem href="/contato" label="Contato" />
                  </div>
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      </div>
    </div>
  );
}

export { Dropdown };
