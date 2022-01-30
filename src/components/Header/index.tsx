import Image from 'next/image'
import Link from './Link'
import { Header as HeaderStyled, Nav, Container } from './styles'

export function Header() {
  return (
    <HeaderStyled>
      <Container>
        <Link href="/">
          <Image
            src="/LogoHighlanderTech.png"
            alt="Highlander Tech"
            height={28}
            width={193}
          />
        </Link>

        <Nav>
          <Link href="/">Home</Link>
          <Link href="/quem-somos">Quem Somos</Link>
          <Link href="/contato">Contato</Link>
        </Nav>
      </Container>
    </HeaderStyled>
  )
}
