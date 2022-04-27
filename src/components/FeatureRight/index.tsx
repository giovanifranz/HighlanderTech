import { BsArrowRight } from 'react-icons/bs'
import Image from 'next/image'
import Link from 'next/link'

import { Anchor, Article, Container, Text } from './styles'

interface FeatureRightProps {
  title: string
  subTitle: string
  image: string
  description: string
}

export function FeatureRight({ title, subTitle, image, description }: FeatureRightProps) {
  return (
    <Container>
      <Article>
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
        <Text>{description}</Text>
        <Link href="/contato" passHref>
          <Anchor>
            <p>Solicte seu orçamento</p> <BsArrowRight size={22} />
          </Anchor>
        </Link>
      </Article>
      <Image src={image} alt={title} height={540} width={540} />
    </Container>
  )
}
