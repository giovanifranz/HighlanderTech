import { Container, Image, ImageSM } from './styles'

export function Equipe() {
  return (
    <Container>
      <h3>Equipe</h3>
      <Image src="/quem-somos/equipe.png" alt="Equipe" width={1140} height={200} />
      <ImageSM src="/quem-somos/equipe-sm.png" alt="Equipe" width={667} height={204} />
    </Container>
  )
}
