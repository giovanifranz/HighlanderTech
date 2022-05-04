import { useWindowsSize } from 'hooks/useWindowsSize'
import Image from 'next/image'

import { Container, Content } from './styles'

export function Equipe() {
  const width = useWindowsSize()

  return (
    <Container>
      <h3>Equipe</h3>
      <Content>
        <Image
          src={width < 768 ? '/quem-somos/equipe-sm.png' : '/quem-somos/equipe.png'}
          alt="Equipe"
          layout="fill"
        />
      </Content>
    </Container>
  )
}
