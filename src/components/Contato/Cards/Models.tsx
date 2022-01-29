import CardsContato from './CardsContato'
import { MdOutlineReportProblem } from 'react-icons/md'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import { GiConsoleController } from 'react-icons/gi'
import { RiFileEditLine, RiComputerLine } from 'react-icons/ri'
import { BsEyeFill, BsQuestionLg } from 'react-icons/bs'

export const SUA_DUVIDA = (
  <CardsContato
    title="SUAS DÚVIDAS"
    purple={true}
    icon={BsQuestionLg}
    description="Não tenha medo de perguntar! Pode nos mandar todas as suas dúvidas, faremos o possível para sanar todas elas!"
  />
)
export const SEU_PLANO = (
  <CardsContato
    title="SEU PLANO"
    purple={true}
    icon={RiFileEditLine}
    description="Informe qual plano você têm interesse, para sabermos como melhor podemos lhe atender!"
  />
)

export const SUA_VISAO = (
  <CardsContato
    title="SUA VISÃO"
    icon={BsEyeFill}
    description="Conte para nós quais os seus objetivos com o site, assim poderemos como podemos criar algo que alcance sua visão!"
  />
)

export const SEU_PROBLEMA = (
  <CardsContato
    purple={true}
    title="SEU PROBLEMA"
    icon={MdOutlineReportProblem}
    description="Informe o mais detalhadamente possível o problema que você está enfrentando, assim saberemos o que procurar!"
  />
)
export const SEU_SETUP = (
  <CardsContato
    title="SEU SETUP"
    description="Informa o mais detalhadamente qual a configuração do seu PC, assim podemos filtrar o número de problemas possíveis"
    icon={RiComputerLine}
  />
)
export const SEU_ORCAMENTO = (
  <CardsContato
    title="SEU ORÇAMENTO"
    purple={true}
    description="Informe um valor máximo para a montagem do seu computador, assim saberemos até onde podemos ir!"
    icon={FaRegMoneyBillAlt}
  />
)

export const SUA_NECESSIDADE = (
  <CardsContato
    title="SUA NECESSIDADE"
    icon={GiConsoleController}
    description="Nos diga qual vai ser o objetivo de uso do PC eacessórios irá precisar, assim saberemos o que indicar para você!"
  />
)
