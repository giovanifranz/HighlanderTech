import Image from 'next/image'
import imgArrow from '@/assets/svgs/arrow.svg'
import * as S from './styles'

type Props = {
  href: string
  text: string
  image: 'oriental' | 'entremalhas' | 'kyra'
  demo?: boolean
}

function Card({ href, text, image, demo = false }: Props) {
  return (
    <S.Container image={image} href={href}>
      <S.Content>
        <S.Subtitle>{text}</S.Subtitle>
        {demo && <S.Demo>Demo</S.Demo>}
        <Image src={imgArrow} alt={text} height={36} width={36} />
      </S.Content>
    </S.Container>
  )
}

export { Card }
export type { Props as CardProps }
