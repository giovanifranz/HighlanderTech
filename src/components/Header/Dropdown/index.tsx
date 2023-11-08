'use client'
import Image from 'next/image'
import Link from 'next/link'

import imgMenu from '@/assets/svgs/menu.svg'

import * as S from './styles'

type Props = {
  href: string
  label: string
}

function Item({ href, label }: Props) {
  return (
    <S.Item>
      <Link href={href}>{label}</Link>
    </S.Item>
  )
}

export function Dropdown() {
  return (
    <S.Root>
      <S.Trigger>
        <Image src={imgMenu} width="40" height="20" alt="Menu" />
      </S.Trigger>
      <S.Portal>
        <S.Content>
          <Item href="/" label="Home" />
          <Item href="/quem-somos" label="Quem Somos" />
          <Item href="/portfolio" label="Portfólio" />
          <Item href="/contato" label="Contato" />
        </S.Content>
      </S.Portal>
    </S.Root>
  )
}
