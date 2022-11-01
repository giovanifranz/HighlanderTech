import Image from 'next/image';

import { Subtitle, Title } from 'components';

type Props = {
  base64: string;
};

function Fazemos({ base64 }: Props) {
  return (
    <section className="w-11/12 md:max-w-6xl mx-0 flex justify-center items-center flex-col md:flex-row gap-5">
      <Image
        src="/quem-somos/about.png"
        priority
        loading="eager"
        alt="Sobre"
        width={400}
        height={375}
        blurDataURL={base64}
        placeholder="blur"
      />
      <article className="mx-0 flex flex-col text-center md:text-left flex-1">
        <Title text="A Highlander Tech" />
        <Subtitle text="O que nós fazemos?" />
        <p className="text-lg my-8">
          A Highlander Tech é uma empresa que presta serviços de montagem e
          manutenção de computadores, completo com consultoria, além da criação
          de sites para pequenos negócios que querem entrar entrar no mundo
          digital.
          <br />
          <br />
          Nossa empresa preza o relacionamento pessoal com o cliente, criando
          conteúdo e oferecendo produtos que, ao mesmo tempo que suprem a
          necessidade, manifestam a identidade do cliente.
        </p>
      </article>
    </section>
  );
}

export { Fazemos };
export type { Props as FazemosProps };
