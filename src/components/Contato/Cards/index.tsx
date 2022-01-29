import { Title, Container, Content } from './styles'
import {
  SUA_DUVIDA,
  SUA_VISAO,
  SEU_ORCAMENTO,
  SEU_PLANO,
  SEU_PROBLEMA,
  SEU_SETUP,
  SUA_NECESSIDADE
} from './Models'
export function Cards() {
  return (
    <Container>
      <Title>Lembre-se de informar:</Title>
      <Content>
        {SUA_DUVIDA}
        {SEU_SETUP}
        {SEU_PLANO}
      </Content>
    </Container>
  )
}
