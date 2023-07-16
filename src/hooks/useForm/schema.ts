import { z } from 'zod'

export const formSchema = z.object({
  nome: z.string().nonempty('O nome é obrigatório'),
  email: z
    .string()
    .nonempty('O e-mail é obrigatório')
    .email()
    .transform((email) => email.toLowerCase()),
  mensagem: z.string().nonempty('A mensagem é obrigatória'),
  telefone: z.string(),
  service: z.string(),
})

export type Payload = z.infer<typeof formSchema>
