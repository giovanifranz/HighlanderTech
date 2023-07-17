import { Client } from 'postmark'
import { z } from 'zod'

const bodySchema = z.object({
  nome: z.string(),
  service: z.string(),
  telefone: z.string(),
  email: z.string().email(),
  mensagem: z.string(),
})

// export const runtime = 'edge'

export async function POST(request: Request) {
  try {
    const payload = await request.json()
    const { email, mensagem, nome, service, telefone } =
      bodySchema.parse(payload)

    const client = new Client(process.env.POSTMARK_API_KEY || '')
    await client.sendEmail({
      From: 'comercial@highlandertech.com.br',
      To: 'comercial@highlandertech.com.br',
      Subject: `Nome: ${nome} / Serviço: ${service}`,
      HtmlBody: `Telefone: ${telefone} <br> E-mail: ${email} <br> Mensagem: ${mensagem}`,
    })
    return new Response('E-mail enviado com sucesso', { status: 200 })
  } catch (error) {
    return new Response('Erro ao enviar e-mail', { status: 500 })
  }
}
