import { GetStaticProps } from 'next';
import { getPlaiceholder } from 'plaiceholder';
import { Card } from './home/Card';
type Props = { feature_1: string; feature_2: string; feature_3: string };

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { base64: feature_1 } = await getPlaiceholder('/home/feature_1.png');
  const { base64: feature_2 } = await getPlaiceholder('/home/feature_2.png');
  const { base64: feature_3 } = await getPlaiceholder('/home/feature_3.png');

  return {
    props: {
      feature_1,
      feature_2,
      feature_3,
    },
  };
};

export default function Home({ feature_1, feature_2, feature_3 }: Props) {
  return (
    <main>
      <Card
        isFirst
        isRight
        title="Criação de Websites"
        subTitle="Capture seus clientes"
        description="Precisando de uma página para o seu negócio? Uma página com a sua
        identidade, integrado com seu e-mail comercial ajuda a alavancar
        suas conversões, além de ser muito mais profissional."
        image="/home/feature_1.png"
        type="sites"
        base64={feature_1}
      />
      <Card
        title="Montagem de Computadores"
        subTitle="Um PC para VOCÊ"
        description="Precisa de um computador para a faculdade? Ou talvez para começar seu
        canal do youtube? Seja só o gabinete ou o setup completo, montamos o
        seu computador de acordo com a SUA necessidade, com nossa consultoria
        completa."
        image="/home/feature_2.png"
        type="mounting"
        base64={feature_2}
      />
      <Card
        isRight
        title="Manutenção e Assistência"
        subTitle="Seu PC não pode parar"
        description="Seja para trabalhar, estudar ou se divertir, o computador é uma
        parte essencial das nossas vidas - por isso oferecemos manutenção e
        assistência para computadores, sejam eles para escritório ou para
        jogos."
        image="/home/feature_3.png"
        type="maintenance"
        base64={feature_3}
      />
    </main>
  );
}
