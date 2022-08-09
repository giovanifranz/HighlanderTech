import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

const BASE_URL = 'https://www.highlandertech.com.br';

function Seo() {
  const { pathname } = useRouter();
  const canonical = `${BASE_URL}${pathname}`;
  const title = 'Highlander Tech';

  return (
    <NextSeo
      title={title}
      languageAlternates={[{ hrefLang: 'pt-br', href: BASE_URL }]}
      description="Precisando de uma página para o seu negócio? Uma página com a sua identidade, integrado com seu e-mail comercial ajuda a alavancar suas conversões, além de ser muito mais profissional."
      canonical={canonical}
      openGraph={{
        url: `${BASE_URL}/og-image.jpg`,
        title,
        description: 'Crie o extraordinário. Seja autêntico.',
        type: 'image/jpeg',
        images: [
          {
            url: `${BASE_URL}/og-image.jpg`,
            width: 815,
            height: 315,
            alt: title,
            type: 'image/jpeg',
          },
        ],
        site_name: title,
      }}
    />
  );
}

export { Seo };
