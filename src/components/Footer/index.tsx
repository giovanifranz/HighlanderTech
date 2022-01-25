import Image from 'next/image'
import Link from 'next/link'
import { Footer as FooterStyled, Container, Nav, Text } from './styles'
import { RiWhatsappFill, RiInstagramFill, RiFacebookFill } from 'react-icons/ri'

export function Footer() {
  return (
    <FooterStyled>
      <Container>
        <Nav>
          <Link href="/">
            <a>
              <Image
                src="/LogoHighlanderTech.png"
                alt="Highlander Tech"
                height={28}
                width={193}
              />
            </a>
          </Link>
          <Link href="https://api.whatsapp.com/send?phone=555199188952">
            <a>
              <RiWhatsappFill className="Icon" />
            </a>
          </Link>
          <Link href="https://www.instagram.com/highlandertechbr/">
            <a>
              <RiInstagramFill className="Icon" />
            </a>
          </Link>
          <Link href="https://www.facebook.com/Highlandertech">
            <a>
              <RiFacebookFill className="Icon" />
            </a>
          </Link>
        </Nav>

        <Text>
          HIGHLANDER COMERCIO VAREJISTA E DESENVOLVIMENTO DE SOFTWARES LTDA
          <br />
          CNPJ 42.295.929/0001-35
        </Text>
      </Container>
    </FooterStyled>
  )
}
