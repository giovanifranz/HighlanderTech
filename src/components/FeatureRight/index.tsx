import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';

import { Anchor, Article, Container, Text } from './styles';

interface FeatureRightProps {
  title: string;
  subTitle: string;
  image: string;
  description: string;
  type: Select;
}

export function FeatureRight({
  title,
  subTitle,
  image,
  description,
  type,
}: FeatureRightProps) {
  return (
    <Container>
      <Article>
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
        <Text>{description}</Text>
        <Link href={`/contato?select=${type}`} passHref>
          <Anchor>
            <p>Solicite seu orçamento</p> <BsArrowRight size={22} />
          </Anchor>
        </Link>
      </Article>
      <Image src={image} alt={title} height={540} width={540} />
    </Container>
  );
}
