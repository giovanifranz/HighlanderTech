import { Equipe } from './Equipe'
import { Fazemos } from './Fazemos'
import * as S from './styles'

export default function QuemSomos() {
  return (
    <S.Container>
      <Fazemos />
      <Equipe />
    </S.Container>
  )
}
