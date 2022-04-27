import { FeatureLeft, FeatureRight } from '../components'

export default function Home() {
  return (
    <>
      <FeatureRight
        title="Criação de Websites"
        subTitle="Capture seus clientes"
        description="Precisando de uma página para o seu negócio? Uma página com a sua
  identidade, integrado com seu e-mail comercial ajuda a alavancar
  suas conversões, além de ser muito mais profissional."
        image="/home/feature_1.png"
      />
      <FeatureLeft />
      <FeatureRight
        title="manutenção e assistência"
        subTitle="Seu PC não pode parar"
        description="Seja para trabalhar, estudar ou se divertir, o computador é uma
        parte essencial das nossas vidas - por isso oferecemos manutenção e
        assistência para computadores, sejam eles para escritório ou para
        jogos."
        image="/home/feature_3.png"
      />
    </>
  )
}
