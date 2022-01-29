import Image from 'next/image'
import { About, Article, Text } from './styles'
export function Fazemos() {
  return (
    <About>
      <Image src="/quem-somos/about.png" alt="Sobre" width={400} height={372} />
      <Article>
        <h1>A Highlander Tech</h1>
        <h2>O que nós fazemos?</h2>
        <Text>
          A Highlander Tech é uma empresa que presta serviços de montagem e
          manutenção de computadores, completo com consultoria, além da criação
          de sites para pequenos negócios que querem entrar entrar no mundo
          digital.
          <br />
          <br />
          Nossa empresa preza o relacionamento pessoal com o cliente, criando
          conteúdo e oferecendo produtos que, ao mesmo tempo que suprem a
          necessidade, manifestam a identidade do cliente.
        </Text>
      </Article>
    </About>
  )
}
