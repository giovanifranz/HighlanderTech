import type { PropsWithChildren } from 'react'
import * as S from './styles'

type Props = {
  isRight?: boolean
}

export function Subtitle({ children, isRight }: PropsWithChildren<Props>) {
  if (isRight) return <S.Right>{children}</S.Right>

  return <S.Left>{children}</S.Left>
}
