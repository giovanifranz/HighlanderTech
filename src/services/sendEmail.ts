import type { Payload } from '@/hooks/useForm/schema'

export const sendEmail = async (payload: Payload) => {
  const response = await fetch('/api/email', {
    method: 'POST',
    body: JSON.stringify(payload),
    cache: 'no-cache',
  })
  if (response.status !== 200) {
    throw new Error(
      'Ocorreu um erro ao enviar o e-mail, tente novamente mais tarde!',
    )
  }
}
