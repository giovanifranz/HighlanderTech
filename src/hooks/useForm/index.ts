import { useCallback, useEffect } from 'react'
import { useForm as useReactHookForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { zodResolver } from '@hookform/resolvers/zod'

import { serviceStore } from '@/store/serviceStore'

import { Payload, formSchema } from './schema'

export function useForm() {
  const { service, setService } = serviceStore()

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { isSubmitting },
  } = useReactHookForm<Payload>({
    defaultValues: {
      service,
      nome: '',
      email: '',
      telefone: '',
      mensagem: '',
    },
    resolver: zodResolver(formSchema),
  })

  const onSubmit = useCallback(
    async (payload: Payload) => {
      try {
        await toast.promise(
          fetch('/api/email', {
            method: 'POST',
            body: JSON.stringify(payload),
          }),
          {
            pending: 'Enviando e-mail...',
            success: 'E-mail enviado com sucesso!',
            error:
              'Ocorreu um erro ao enviar o e-mail, tente novamente mais tarde!',
          },
        )
        reset()
      } catch (error) {
        console.error(error)
      }
    },
    [reset],
  )

  const selected = watch('service') as Select
  useEffect(() => {
    setService(selected)
  }, [selected, setService])

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    isSubmitting,
  }
}
