import { createTransport } from 'utils/nodemailer'
import type { inferAsyncReturnType } from '@trpc/server'

export async function createContext() {
  return {
    createTransport,
  }
}

export type Context = inferAsyncReturnType<typeof createContext>
