import { Subtitle, Title } from 'components';

import entremalhas from '../../../public/portfolio/entremalhas.webp';
import kyra from '../../../public/portfolio/kyra.webp';
import oriental from '../../../public/portfolio/oriental.webp';
import { Card } from './Card';

export default function Portfolio() {
  return (
    <main className="mx-0 flex w-11/12 flex-col justify-between md:max-w-6xl">
      <article>
        <header>
          <Title text="Portfólio" />
          <Subtitle>Conheça o nosso trabalho!</Subtitle>
        </header>
        <span className="text-center md:text-left">
          * Alguns sites abaixo foram feitos apenas para demonstração.
        </span>
      </article>
      <div className="mt-6 flex h-full w-full flex-wrap justify-center gap-10">
        <Card
          srcImage={kyra}
          href="https://www.kyra.com.br/"
          text="Kyra Pesquisa"
        />
        <Card
          srcImage={entremalhas}
          href="https://entremalhas.com.br/"
          text="Entremalhas"
        />
        <Card
          srcImage={oriental}
          href="https://oriental.highlandertech.com.br/"
          text="Oriental Wing Chun"
          demo
        />
      </div>
    </main>
  );
}
