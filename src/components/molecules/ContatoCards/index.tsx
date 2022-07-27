import { BsEyeFill, BsQuestionLg } from 'react-icons/bs';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { GiConsoleController } from 'react-icons/gi';
import { MdOutlineReportProblem } from 'react-icons/md';
import { RiComputerLine, RiFileEditLine } from 'react-icons/ri';

import { ContatoCards } from './ContatoCards';

export const SUA_DUVIDA = (
  <ContatoCards
    title="SUAS DÚVIDAS"
    isPurple
    Icon={BsQuestionLg}
    description="Não tenha medo de perguntar! Pode nos mandar todas as suas dúvidas, faremos o possível para sanar todas elas!"
  />
);

const SEU_PLANO = (
  <ContatoCards
    title="SEU PLANO"
    isPurple
    Icon={RiFileEditLine}
    description="Informe qual plano você têm interesse, para sabermos como melhor podemos lhe atender!"
  />
);

const SUA_VISAO = (
  <ContatoCards
    title="SUA VISÃO"
    Icon={BsEyeFill}
    description="Conte para nós quais os seus objetivos com o site, assim poderemos como podemos criar algo que alcance sua visão!"
  />
);

const SEU_PROBLEMA = (
  <ContatoCards
    isPurple
    title="SEU PROBLEMA"
    Icon={MdOutlineReportProblem}
    description="Informe o mais detalhadamente possível o problema que você está enfrentando, assim saberemos o que procurar!"
  />
);

const SEU_SETUP = (
  <ContatoCards
    title="SEU SETUP"
    description="Informa o mais detalhadamente qual a configuração do seu PC, assim podemos filtrar o número de problemas possíveis"
    Icon={RiComputerLine}
  />
);

const SEU_ORCAMENTO = (
  <ContatoCards
    title="SEU ORÇAMENTO"
    isPurple
    description="Informe um valor máximo para a montagem do seu computador, assim saberemos até onde podemos ir!"
    Icon={FaRegMoneyBillAlt}
  />
);

const SUA_NECESSIDADE = (
  <ContatoCards
    title="SUA NECESSIDADE"
    Icon={GiConsoleController}
    description="Nos diga qual vai ser o objetivo de uso do PC eacessórios irá precisar, assim saberemos o que indicar para você!"
  />
);

export const modelsContatos = {
  sites: [SEU_PLANO, SUA_VISAO],
  maintenance: [SEU_PROBLEMA, SEU_SETUP],
  mounting: [SEU_ORCAMENTO, SUA_NECESSIDADE],
};
