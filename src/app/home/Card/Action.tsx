import type { PropsWithChildren } from 'react'

import * as S from './styles'

type Props = {
  isRight?: boolean
  type: Select
}

export function Action({ isRight, children, type }: PropsWithChildren<Props>) {
  const { Link } = S.Components(isRight)
  const href = {
    pathname: '/contato',
    query: { service: type },
  }

  if (isRight)
    return (
      <Link href={href}>
        {children} <S.ArrowRight />
      </Link>
    )

  return (
    <Link href={href}>
      <S.ArrowLeft /> {children}
    </Link>
  )
}
