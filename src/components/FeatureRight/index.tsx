import Image from 'next/image'
import { Container, Article, Text, Button } from './styles'
import { BsArrowRight } from 'react-icons/bs'
interface FeatureRightProps {
  title: string
  subTitle: string
  image: string
  description: string
}

export function FeatureRight({
  title,
  subTitle,
  image,
  description
}: FeatureRightProps) {
  return (
    <Container>
      <Article>
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
        <Text>{description}</Text>
        <Button>
          <p>Solicte seu orçamento</p> <BsArrowRight size={22} />
        </Button>
      </Article>
      <Image src={image} alt={title} height={540} width={540} />
    </Container>
  )
}
