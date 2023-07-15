'use client'
import { useWindowsSize } from '@/hooks/useWindowsSize'
import * as S from './styles'
import { Logo } from '@/components'
import { Navigation } from './Navigation'
import { Dropdown } from './Dropdown'

export function Header() {
  const width = useWindowsSize()
  return (
    <S.Container>
      <S.Content>
        <Logo />
        {width > 720 ? <Navigation /> : <Dropdown />}
      </S.Content>
    </S.Container>
  )
}
