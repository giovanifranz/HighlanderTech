import { useEffect, useState } from 'react'

import { useSelect } from '../../../hooks/useSelect'

import { modelsMapper, SUA_DUVIDA } from './Models'
import { Container, Content, Title } from './styles'

export function Cards() {
  const [FirstCard, setFirstCard] = useState(modelsMapper['sites'][0])
  const [SecondCard, setSecondCard] = useState(modelsMapper['sites'][1])

  const { select } = useSelect()

  useEffect(() => {
    setFirstCard(modelsMapper[select][0])
    setSecondCard(modelsMapper[select][1])
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
