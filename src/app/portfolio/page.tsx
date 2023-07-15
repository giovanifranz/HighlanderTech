import { Subtitle, Title } from '@/components'
import * as S from './styles'
import { Card } from './Card'

export default function Portfolio() {
  return (
    <S.Container>
      <article>
        <header>
          <Title>Portfólio</Title>
          <Subtitle>Conheça o nosso trabalho!</Subtitle>
        </header>
        <S.Note>
          * Alguns sites abaixo foram feitos apenas para demonstração.
        </S.Note>
      </article>
      <S.Cards>
        <Card
          image="kyra"
          href="https://www.kyra.com.br/"
          text="Kyra Pesquisa"
        />
        <Card
          image="entremalhas"
          href="https://entremalhas.com.br/"
          text="Entremalhas"
        />
        <Card
          image="oriental"
          href="https://oriental.highlandertech.com.br/"
          text="Oriental Wing Chun"
          demo
        />
      </S.Cards>
    </S.Container>
  )
}
