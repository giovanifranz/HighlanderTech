import { useEffect, useState } from 'react'

import { useSelect } from '../../../hooks/useSelect'

import {
  SEU_ORCAMENTO,
  SEU_PLANO,
  SEU_PROBLEMA,
  SEU_SETUP,
  SUA_DUVIDA,
  SUA_NECESSIDADE,
  SUA_VISAO,
} from './Models'
import { Container, Content, Title } from './styles'

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
