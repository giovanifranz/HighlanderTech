import { Link } from '@/components'
import * as S from './styles'

export function Navigation() {
  return (
    <S.Container>
      <Link href="/">Home</Link>
      <Link href="/quem-somos">Quem Somos</Link>
      <Link href="/portfolio">Portfólio</Link>
      <Link href="/contato">Contato</Link>
    </S.Container>
  )
}
