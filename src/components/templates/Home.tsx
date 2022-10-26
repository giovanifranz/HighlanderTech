import { Feature } from '../organisms';

function Home() {
  return (
    <>
      <Feature
        isFirst
        isRight
        title="Criação de Websites"
        subTitle="Capture seus clientes"
        description="Precisando de uma página para o seu negócio? Uma página com a sua
        identidade, integrado com seu e-mail comercial ajuda a alavancar
        suas conversões, além de ser muito mais profissional."
        image="/home/feature_1.png"
        type="sites"
      />
      <Feature
        title="Montagem de Computadores"
        subTitle="Um PC para VOCÊ"
        description="Precisa de um computador para a faculdade? Ou talvez para começar seu
        canal do youtube? Seja só o gabinete ou o setup completo, montamos o
        seu computador de acordo com a SUA necessidade, com nossa consultoria
        completa."
        image="/home/feature_2.png"
        type="mounting"
      />
      <Feature
        isRight
        title="Manutenção e Assistência"
        subTitle="Seu PC não pode parar"
        description="Seja para trabalhar, estudar ou se divertir, o computador é uma
        parte essencial das nossas vidas - por isso oferecemos manutenção e
        assistência para computadores, sejam eles para escritório ou para
        jogos."
        image="/home/feature_3.png"
        type="maintenance"
      />
    </>
  );
}

export { Home };
