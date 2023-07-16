import type { StaticImageData } from 'next/image'

import { Subtitle, Title, Image } from '@/components'

import { Action } from './Action'
import * as S from './styles'

type Props = {
  title: string
  subTitle: string
  image: StaticImageData['src']
  description: string
  isRight?: boolean
  type: Select
}

export function Card({
  title,
  subTitle,
  image,
  description,
  isRight = false,
  type,
}: Props) {
  const { Container, Content } = S.Components(isRight)
  return (
    <Container>
      <Content>
        <header>
          <Title isRight={isRight}>{title}</Title>
          <Subtitle isRight={isRight}>{subTitle}</Subtitle>
        </header>
        <S.Paragraph>{description}</S.Paragraph>
        <Action type={type} isRight={isRight}>
          <span>Solicite seu orçamento</span>
        </Action>
      </Content>
      <Image src={image} alt={title} height={540} width={540} />
    </Container>
  )
}
