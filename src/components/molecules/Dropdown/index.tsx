import { Disclosure, Transition } from '@headlessui/react';

import { MenuItem } from '../../atoms';

import styles from './dropdown.module.css';

function Dropdown() {
  return (
    <div className={styles.container}>
      <Disclosure>
        {({ open }) => (
          <>
            <span>
              <Disclosure.Button className={styles.button}>
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
              </Disclosure.Button>
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
              <Disclosure.Panel static className={styles.panel}>
                <div className={styles.wrapper}>
                  <MenuItem href="/" label="Home" />
                  <MenuItem href="/quem-somos" label="Quem Somos" />
                  <MenuItem href="/contato" label="Contato" />
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
}

export { Dropdown };
