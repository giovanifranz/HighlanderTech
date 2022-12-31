import { GetStaticProps } from 'next'
import { getPlaiceholder } from 'plaiceholder'
import { Equipe } from './Equipe'
import { Fazemos } from './Fazemos'

const imgQuemSomos = '/quem-somos/about.png'

type Props = { base64: string }

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { base64 } = await getPlaiceholder(imgQuemSomos)

  return {
    props: {
      base64,
    },
  }
}

export default function QuemSomos({ base64 }: Props) {
  return (
    <main className="flex flex-col items-center">
      <Fazemos base64={base64} image={imgQuemSomos} />
      <Equipe />
    </main>
  )
}
