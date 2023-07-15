import type { IconType } from 'react-icons'
import * as S from './styles'

type Props = {
  Icon: IconType
  title: string
  description: string
  isPurple?: boolean
}

export function Contato({ Icon, title, description, isPurple }: Props) {
  return (
    <S.Container isPurple={isPurple}>
      <Icon size={55} />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Container>
  )
}
