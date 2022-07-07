import { BsEyeFill, BsQuestionLg } from 'react-icons/bs';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { GiConsoleController } from 'react-icons/gi';
import { MdOutlineReportProblem } from 'react-icons/md';
import { RiComputerLine, RiFileEditLine } from 'react-icons/ri';

import CardsContato from '../src/components/Contato/Cards/CardsContato';

export const SUA_DUVIDA = (
  <CardsContato
    title="SUAS DÚVIDAS"
    purple
    icon={BsQuestionLg}
    description="Não tenha medo de perguntar! Pode nos mandar todas as suas dúvidas, faremos o possível para sanar todas elas!"
  />
);

const SEU_PLANO = (
  <CardsContato
    title="SEU PLANO"
    purple
    icon={RiFileEditLine}
    description="Informe qual plano você têm interesse, para sabermos como melhor podemos lhe atender!"
  />
);

const SUA_VISAO = (
  <CardsContato
    title="SUA VISÃO"
    icon={BsEyeFill}
    description="Conte para nós quais os seus objetivos com o site, assim poderemos como podemos criar algo que alcance sua visão!"
  />
);

const SEU_PROBLEMA = (
  <CardsContato
    purple
    title="SEU PROBLEMA"
    icon={MdOutlineReportProblem}
    description="Informe o mais detalhadamente possível o problema que você está enfrentando, assim saberemos o que procurar!"
  />
);

const SEU_SETUP = (
  <CardsContato
    title="SEU SETUP"
    description="Informa o mais detalhadamente qual a configuração do seu PC, assim podemos filtrar o número de problemas possíveis"
    icon={RiComputerLine}
  />
);

const SEU_ORCAMENTO = (
  <CardsContato
    title="SEU ORÇAMENTO"
    purple
    description="Informe um valor máximo para a montagem do seu computador, assim saberemos até onde podemos ir!"
    icon={FaRegMoneyBillAlt}
  />
);

const SUA_NECESSIDADE = (
  <CardsContato
    title="SUA NECESSIDADE"
    icon={GiConsoleController}
    description="Nos diga qual vai ser o objetivo de uso do PC eacessórios irá precisar, assim saberemos o que indicar para você!"
  />
);

export const modelsMapper = {
  sites: [SEU_PLANO, SUA_VISAO],
  maintenance: [SEU_PROBLEMA, SEU_SETUP],
  mounting: [SEU_ORCAMENTO, SUA_NECESSIDADE],
};
