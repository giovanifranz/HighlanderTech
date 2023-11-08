import { Client } from 'postmark'
import { z } from 'zod'

import { env } from '@/utils/env'

const bodySchema = z.object({
  nome: z.string(),
  service: z.string(),
  telefone: z.string(),
  email: z.string().email(),
  mensagem: z.string(),
})

export async function POST(request: Request) {
  const payload = await request.json()
  const result = bodySchema.safeParse(payload)

  if (!result.success) {
    return new Response('Payload inválido', { status: 406 })
  }

  const { email, mensagem, nome, service, telefone } = result.data

  const client = new Client(env.POSTMARK_API_KEY)

  return await client
    .sendEmail({
      From: 'comercial@highlandertech.com.br',
      To: 'comercial@highlandertech.com.br',
      Subject: `Nome: ${nome} / Serviço: ${service}`,
      HtmlBody: `Telefone: ${telefone} <br> E-mail: ${email} <br> Mensagem: ${mensagem}`,
    })
    .then(() => new Response('E-mail enviado com sucesso', { status: 200 }))
    .catch(
      () => new Response('Ocorreu um erro ao enviar o e-mail', { status: 500 }),
    )
}
