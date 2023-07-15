import { FormValues, formSchema } from './schema'
import { useForm as useReactHookForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

export function useForm(service: string) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useReactHookForm<FormValues>({
    defaultValues: {
      service,
      nome: '',
      email: '',
      telefone: '',
      mensagem: '',
    },
    resolver: zodResolver(formSchema),
  })

  return {
    register,
    handleSubmit,
    isSubmitting,
  }
}
