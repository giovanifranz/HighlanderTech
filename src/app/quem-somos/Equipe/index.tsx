import { Card } from './Card'
import * as S from './styles'

export function Equipe() {
  return (
    <S.Container>
      <S.Content>
        <Card
          name="Iago Paz"
          activity1="Design"
          activity2="Layout"
          activity3="Consultoria"
          activity4="Assistência"
          href="https://www.linkedin.com/in/iago-paz-2164a2220"
        />
        <S.Circle />
        <Card
          name="Giovani Franz"
          activity1="Desenvolvimento"
          activity2="Assistência"
          activity3="Layout"
          activity4="SEO"
          href="https://www.linkedin.com/in/giovanifranz"
        />
      </S.Content>
    </S.Container>
  )
}
