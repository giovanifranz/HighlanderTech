import { Payload, formSchema } from './schema'
import { useForm as useReactHookForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-toastify'
import { useCallback, useEffect } from 'react'
import { serviceStore } from '@/store/serviceStore'

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

  const onSubmit = useCallback(async (payload: Payload) => {
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
  }, [])

  useEffect(() => {
    setService(watch('service') as Select)
  }, [watch('service')])

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    isSubmitting,
  }
}
