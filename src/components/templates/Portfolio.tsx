import { Subtitle, Title } from 'components/atoms';

import entremalhas from '../../../public/portfolio/entremalhas.webp';
import kyra from '../../../public/portfolio/kyra.webp';
import oriental from '../../../public/portfolio/oriental.webp';
import { PortfolioCard } from '../organisms';

function Portfolio() {
  return (
    <div className="flex flex-col justify-between w-11/12 mx-0 items-left md:max-w-6xl ">
      <Title text="Portfólio" />
      <Subtitle text="Conheça o nosso trabalho!" />
      <span className="text-center md:text-left">
        * Alguns sites abaixo foram feitos apenas para demonstração.
      </span>

      <div className="flex flex-wrap justify-center w-full h-full mt-6 gap-10">
        <PortfolioCard
          srcImage={kyra}
          href="https://www.kyra.com.br/"
          text="Kyra Pesquisa"
        />
        <PortfolioCard
          srcImage={entremalhas}
          href="https://entremalhas.com.br/"
          text="Entremalhas"
        />
        <PortfolioCard
          srcImage={oriental}
          href="https://oriental.highlandertech.com.br/"
          text="Oriental Wing Chun"
          demo
        />
      </div>
    </div>
  );
}

export { Portfolio };
