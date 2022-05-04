import { Logo } from 'components/Logo'

import Link from './Link'
import { Container, Header as HeaderStyled, Nav } from './styles'

export function Header() {
  return (
    <HeaderStyled>
      <Container>
        <Logo />
        <Nav>
          <Link href="/">Home</Link>
          <Link href="/quem-somos">Quem Somos</Link>
          <Link href="/contato">Contato</Link>
        </Nav>
      </Container>
    </HeaderStyled>
  )
}
