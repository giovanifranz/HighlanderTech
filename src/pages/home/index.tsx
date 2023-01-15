import { GetStaticProps } from 'next'
import { getPlaiceholder } from 'plaiceholder'

import { Card } from './Card'

const imgFeature1 = '/home/feature_1.png'
const imgFeature2 = '/home/feature_2.png'
const imgFeature3 = '/home/feature_3.png'

type Props = { feature1: string; feature2: string; feature3: string }

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { base64: feature1 } = await getPlaiceholder(imgFeature1)
  const { base64: feature2 } = await getPlaiceholder(imgFeature1)
  const { base64: feature3 } = await getPlaiceholder(imgFeature1)

  return {
    props: {
      feature1,
      feature2,
      feature3,
    },
  }
}

export default function Home({ feature1, feature2, feature3 }: Props) {
  return (
    <main className="flex flex-col items-center gap-12">
      <Card
        isFirst
        isRight
        title="Criação de Websites"
        subTitle="Capture seus clientes"
        description="Precisando de uma página para o seu negócio? Uma página com a sua
        identidade, integrado com seu e-mail comercial ajuda a alavancar
        suas conversões, além de ser muito mais profissional."
        image={imgFeature1}
        type="sites"
        base64={feature1}
      />
      <Card
        title="Montagem de Computadores"
        subTitle="Um PC para VOCÊ"
        description="Precisa de um computador para a faculdade? Ou talvez para começar seu
        canal do youtube? Seja só o gabinete ou o setup completo, montamos o
        seu computador de acordo com a SUA necessidade, com nossa consultoria
        completa."
        image={imgFeature2}
        type="mounting"
        base64={feature2}
      />
      <Card
        isRight
        title="Manutenção e Assistência"
        subTitle="Seu PC não pode parar"
        description="Seja para trabalhar, estudar ou se divertir, o computador é uma
        parte essencial das nossas vidas - por isso oferecemos manutenção e
        assistência para computadores, sejam eles para escritório ou para
        jogos."
        image={imgFeature3}
        type="maintenance"
        base64={feature3}
      />
    </main>
  )
}
