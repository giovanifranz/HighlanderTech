import { BsArrowRight } from 'react-icons/bs'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { Article, Button, Container, Text } from './styles'

interface FeatureRightProps {
  title: string
  subTitle: string
  image: string
  description: string
}

export function FeatureRight({ title, subTitle, image, description }: FeatureRightProps) {
  const router = useRouter()
  return (
    <Container>
      <Article>
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
        <Text>{description}</Text>
        <Button onClick={() => router.push('/contato')}>
          <p>Solicte seu orçamento</p> <BsArrowRight size={22} />
        </Button>
      </Article>
      <Image src={image} alt={title} height={540} width={540} />
    </Container>
  )
}
