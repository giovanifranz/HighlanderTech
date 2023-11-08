import { z } from 'zod'

export const formSchema = z.object({
  nome: z.string().min(1, 'O nome é obrigatório'),
  email: z
    .string()
    .min(1, 'O e-mail é obrigatório')
    .email()
    .transform((email) => email.toLowerCase()),
  mensagem: z
    .string()
    .min(10, 'A mensagem deve conter pelo menos 10 carácteres'),
  telefone: z.string(),
  service: z.string(),
})

export type Payload = z.infer<typeof formSchema>
