import { Title, Container, Content } from './styles'
import {
  SUA_DUVIDA,
  SEU_PLANO,
  SEU_SETUP,
  SUA_VISAO,
  SEU_PROBLEMA,
  SEU_ORCAMENTO,
  SUA_NECESSIDADE
} from './Models'
import { useEffect, useState } from 'react'
import { useSelect } from '../../../hooks/useSelect'

export function Cards() {
  const [FirstCard, setFirstCard] = useState(<></>)
  const [SecondCard, setSecondCard] = useState(<></>)

  const { select } = useSelect()

  useEffect(() => {
    switch (select) {
      case 'sites':
        setFirstCard(SEU_PLANO)
        setSecondCard(SUA_VISAO)
        break
      case 'maintenance':
        setFirstCard(SEU_PROBLEMA)
        setSecondCard(SEU_SETUP)
        break
      case 'mounting':
        setFirstCard(SEU_ORCAMENTO)
        setSecondCard(SUA_NECESSIDADE)
        break
      default:
        setFirstCard(SEU_PLANO)
        setSecondCard(SUA_VISAO)
    }
  }, [select])

  return (
    <Container>
      <Title>Lembre-se de informar:</Title>
      <Content>
        {FirstCard}
        {SecondCard}
        {SUA_DUVIDA}
      </Content>
    </Container>
  )
}
