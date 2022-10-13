import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { MenuItem } from '../../atoms';

import styles from './dropdown.module.css';

function Dropdown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className={styles.button}>
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
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className={styles.wrapper}>
          <MenuItem href="/" label="Home" />
          <MenuItem href="/quem-somos" label="Quem Somos" />
          <MenuItem href="/portfolio" label="Portfólio" />
          <MenuItem href="/contato" label="Contato" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export { Dropdown };
