/* eslint-disable no-console */
import sgMail from '@sendgrid/mail'

type data = {
  service: string
  email: string
  telefone: string
  nome: string
  mensagem: string
}

export async function sendEmail(data: data) {
  if (process.env.NEXT_PUBLIC_SENDGRID_API_KEY !== undefined) {
    sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY)
    const msg = {
      to: 'giovanifranz151@gmail.com',
      from: 'comercial@highlandertech.com.br',
      subject: `Nome: ${data.nome} / Serviço: ${data.service}`,
      html: `Telefone: ${data.telefone} <br> E-mail: ${data.email} <br> Mensagem: ${data.mensagem}`,
    }
    await sgMail.send(msg).then(
      () => {
        console.log('Email enviado com sucesso!')
      },
      (error) => {
        console.error(error)
        if (error.response) {
          console.error(error.response.body)
        }
      },
    )
  }
}
