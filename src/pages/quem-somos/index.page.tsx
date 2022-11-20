import { GetStaticProps } from 'next';
import { getPlaiceholder } from 'plaiceholder';
import { Equipe } from './Equipe';
import { Fazemos } from './Fazemos';

type Props = { base64: string };

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { base64 } = await getPlaiceholder('/quem-somos/about.png');

  return {
    props: {
      base64,
    },
  };
};

export default function QuemSomos({ base64 }: Props) {
  return (
    <main>
      <Fazemos base64={base64} />
      <Equipe />
    </main>
  );
}
