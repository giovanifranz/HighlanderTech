import { emailFormSchema } from 'pages/contato/Formulario'
import { procedure, router } from '../trpc'
import { TRPCError } from '@trpc/server'

export const appRouter = router({
  sendEmail: procedure
    .input(emailFormSchema)
    .mutation(async ({ input, ctx }) => {
      const { nome, service, telefone, email, mensagem } = input
      const transporter = ctx.createTransport({
        port: 587,
        host: 'smtp.umbler.com',
        auth: {
          user: 'comercial@highlandertech.com.br',
          pass: process.env.UMBLER_PASSWORD,
        },
        tls: {
          rejectUnauthorized: true,
          minVersion: 'TLSv1.2',
        },
      })

      const mailData = {
        to: 'comercial@highlandertech.com.br',
        from: 'comercial@highlandertech.com.br',
        cc: 'giovanifranz151@gmail.com',
        subject: `Nome: ${nome} / Serviço: ${service}`,
        html: `Telefone: ${telefone} <br> E-mail: ${email} <br> Mensagem: ${mensagem}`,
      }

      try {
        return await transporter.sendMail(mailData)
      } catch (err) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Erro ao enviar e-mail!',
        })
      }
    }),
})

export type AppRouter = typeof appRouter
