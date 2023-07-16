import { Link, Logo } from '@/components'
import * as S from './styles'

export function Footer() {
  return (
    <S.Container>
      <S.Content>
        <S.Navigation>
          <Logo />
          <Link
            href="https://api.whatsapp.com/send?phone=555199188952"
            target="_blank"
          >
            <S.WhatsApp aria-label="WhatsApp" />
          </Link>
          <Link
            href="https://www.instagram.com/highlandertechbr/"
            target="_blank"
          >
            <S.Instagram target="_blank" aria-label="Instagram" />
          </Link>
          <Link href="https://www.facebook.com/Highlandertech" target="_blank">
            <S.Facebook aria-label="Facebook" />
          </Link>
        </S.Navigation>
        <S.Info>
          HIGHLANDER COMERCIO VAREJISTA E DESENVOLVIMENTO DE SOFTWARES LTDA
          <br />
          CNPJ 42.295.929/0001-35
        </S.Info>
      </S.Content>
    </S.Container>
  )
}
