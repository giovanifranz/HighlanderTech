import { RiFacebookFill, RiInstagramFill, RiWhatsappFill } from 'react-icons/ri';

import { Logo } from 'components/Logo';

import { Link } from './Link';
import { Container, Footer as FooterStyled, Nav, Text } from './styles';

export function Footer() {
  return (
    <FooterStyled>
      <Container>
        <Nav>
          <Logo />
          <Link href="https://api.whatsapp.com/send?phone=555199188952">
            <RiWhatsappFill className="Icon" />
          </Link>
          <Link href="https://www.instagram.com/highlandertechbr/">
            <RiInstagramFill className="Icon" />
          </Link>
          <Link href="https://www.facebook.com/Highlandertech">
            <RiFacebookFill className="Icon" />
          </Link>
        </Nav>

        <Text>
          HIGHLANDER COMERCIO VAREJISTA E DESENVOLVIMENTO DE SOFTWARES LTDA
          <br />
          CNPJ 42.295.929/0001-35
        </Text>
      </Container>
    </FooterStyled>
  );
}
