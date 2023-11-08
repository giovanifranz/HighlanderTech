import { z } from 'zod'

const envSchema = z.object({
  POSTMARK_API_KEY: z.string().uuid(),
})

const parsedEnv = envSchema.safeParse(process.env)

if (!parsedEnv.success) {
  console.error('Env inválido', parsedEnv.error.flatten().fieldErrors)

  throw new Error('Env inválido')
}

export const env = parsedEnv.data
