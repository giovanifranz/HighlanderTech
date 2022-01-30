import Image from 'next/image'
import { Container, Article, Text, Button } from './styles'
import { BsArrowRight } from 'react-icons/bs'
import { useRouter } from 'next/router'

export function FeatureLeft() {
  const router = useRouter()
  return (
    <Container>
      <Image
        src="/home/feature_2.png"
        alt="Montagem de computadores"
        height={540}
        width={540}
      />
      <Article>
        <h1>Montagem de computadores</h1>
        <h2>Um PC para VOCÊ</h2>
        <Text>
          Precisa de um computador para a faculdade? Ou talvez para começar seu
          canal do youtube? Seja só o gabinete ou o setup completo, montamos o
          seu computador de acordo com a SUA necessidade, com nossa consultoria
          completa.
        </Text>
        <Button onClick={() => router.push('/contato')}>
          <p>Solicte seu orçamento</p> <BsArrowRight size={22} />
        </Button>
      </Article>
    </Container>
  )
}
