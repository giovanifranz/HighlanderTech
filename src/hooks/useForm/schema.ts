import { z } from 'zod'

export const formSchema = z.object({
  nome: z
    .string()
    .min(3, { message: 'O nome requer no mínimo 3 carácteres' })
    .max(25, { message: 'O nome requer no máximo 25 carácteres' }),
  email: z
    .string()
    .min(3, { message: 'O e-mail requer no mínimo 3 carácteres' })
    .max(30, { message: 'O e-mail requer no máximo 30 carácteres' })
    .email()
    .transform((email) => email.toLowerCase()),
  mensagem: z
    .string()
    .min(3, { message: 'A mensagem requer no mínimo 3 carácteres' })
    .max(250, { message: 'A mensagem requer no máximo 250 carácteres' }),
  telefone: z
    .string()
    .min(11, 'Digite apenas os números, com DDD incluso')
    .max(11, 'Digite apenas os números, com DDD incluso'),
  service: z.string(),
})

export type FormValues = z.infer<typeof formSchema>
