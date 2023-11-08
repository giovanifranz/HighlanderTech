import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import type { LinkProps } from 'next/link'
import type { HTMLAttributeReferrerPolicy } from 'react'

import imgArrow from '@/assets/svgs/arrow.svg'

import * as S from './styles'

type Props = {
  href: LinkProps['href']
  text: string
  image: StaticImageData
  demo?: boolean
  referrerPolicy: HTMLAttributeReferrerPolicy
}

function Card({ href, text, referrerPolicy, image, demo = false }: Props) {
  return (
    <S.Container
      href={href}
      target="_blank"
      referrerPolicy={referrerPolicy}
      style={{ backgroundImage: `url(${image.src})` }}
    >
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
