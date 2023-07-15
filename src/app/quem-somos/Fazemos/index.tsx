import Image from 'next/image'
import { Subtitle, Title } from '@/components'
import * as S from './styles'

export function Fazemos() {
  return (
    <S.Container>
      <Image
        src="/quem-somos/about.png"
        priority
        loading="eager"
        alt="Sobre"
        width={400}
        height={375}
      />
      <S.Content>
        <header>
          <Title>A Highlander Tech</Title>
          <Subtitle>O que nós fazemos?</Subtitle>
        </header>
        <S.Paragraph>
          A Highlander Tech é uma empresa que presta serviços de montagem e
          manutenção de computadores, completo com consultoria, além da criação
          de sites para pequenos negócios que querem entrar entrar no mundo
          digital.
        </S.Paragraph>
        <S.Paragraph className="-mt-2">
          Nossa empresa preza o relacionamento pessoal com o cliente, criando
          conteúdo e oferecendo produtos que, ao mesmo tempo que suprem a
          necessidade, manifestam a identidade do cliente.
        </S.Paragraph>
      </S.Content>
    </S.Container>
  )
}
