import { useWindowsSize } from 'hooks/useWindowsSize'
import dynamic from 'next/dynamic'

import { Container, Content } from './styles'

const Image = dynamic(() => import('next/image'))

export function Equipe() {
  const width = useWindowsSize()

  return (
    <Container>
      <h3>Equipe</h3>
      <Content>{width > 1024 && <Image src="/quem-somos/equipe.png" alt="Equipe" layout="fill" />}</Content>
    </Container>
  )
}
