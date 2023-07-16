import { Logo } from '@/components'

import { Dropdown } from './Dropdown'
import { Navigation } from './Navigation'
import * as S from './styles'

export function Header() {
  return (
    <S.Container>
      <S.Content>
        <Logo />
        <Navigation />
        <Dropdown />
      </S.Content>
    </S.Container>
  )
}
