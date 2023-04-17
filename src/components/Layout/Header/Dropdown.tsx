import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import Image from 'next/image'
import imgMenu from '../../../assets/svgs/menu.svg'
import Link from 'next/link'

type Props = {
  href: string
  label: string
}

function MenuItem({ href, label }: Props) {
  return (
    <DropdownMenu.Item className="text-right text-lg text-gray-900">
      <Link href={href}>{label}</Link>
    </DropdownMenu.Item>
  )
}

export default function Dropdown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="shadow-none focus:outline-0">
        <Image src={imgMenu} width="40" height="20" alt="" />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="flex w-40 flex-col gap-2 bg-white pb-4 pr-6 pt-8">
          <MenuItem href="/" label="Home" />
          <MenuItem href="/quem-somos" label="Quem Somos" />
          <MenuItem href="/portfolio" label="Portfólio" />
          <MenuItem href="/contato" label="Contato" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
