import { Title, Container, Content } from './styles'
import { SUA_DUVIDA, SEU_PLANO, SEU_SETUP } from './Models'
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
