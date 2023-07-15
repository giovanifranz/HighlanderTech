import { Link } from '@/components'
import * as S from './styles'

type Props = {
  name: string
  activity1: string
  activity2: string
  activity3: string
  activity4: string
  href: string
}

export function Card({
  name,
  activity1,
  activity2,
  activity3,
  activity4,
  href,
}: Props) {
  return (
    <S.Container>
      <S.Title>{name}</S.Title>
      <S.List>
        <ul>
          <S.Item>{activity1}</S.Item>
          <S.Item>{activity2}</S.Item>
        </ul>
        <ul>
          <S.Item>{activity3}</S.Item>
          <S.Item>{activity4}</S.Item>
        </ul>
      </S.List>
      <Link href={href} target="_blank">
        <S.LinkedIn aria-label="LinkedIn" />
      </Link>
    </S.Container>
  )
}
