import { useCallback, useEffect, useId } from 'react'
import { useForm } from 'react-hook-form'
import type { ToastOptions } from 'react-toastify'
import { toast, ToastContainer } from 'react-toastify'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Subtitle } from 'components'
import { useSelect } from 'hooks/useSelect'

const TOAST_CONFIG: ToastOptions = {
  position: 'top-right',
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
}

const emailFormSchema = z.object({
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
    .min(8, { message: 'A mensagem requer no mínimo 8 carácteres' })
    .max(13, { message: 'A mensagem requer no máximo 13 carácteres' }),
})

type FormValues = z.infer<typeof emailFormSchema> & { service: Select }

export function Formulario() {
  const toastLoadingId = useId()
  const toastErrorId = useId()
  const { select, setSelect } = useSelect()
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      service: select,
      nome: '',
      email: '',
      telefone: '',
      mensagem: '',
    },
    resolver: zodResolver(emailFormSchema),
  })

  const validateForm = useCallback(() => {
    const errorToast = (message?: string) =>
      toast(message, {
        ...TOAST_CONFIG,
        autoClose: 1500,
        type: toast.TYPE.WARNING,
        toastId: toastErrorId,
      })

    if (errors.nome) {
      errorToast(errors.nome.message)
    }
    if (errors.email) {
      errorToast(errors.email.message)
    }
    if (errors.telefone) {
      errorToast(errors.telefone.message)
    }
    if (errors.mensagem) {
      errorToast(errors.mensagem.message)
    }
  }, [
    errors.email,
    errors.mensagem,
    errors.nome,
    errors.telefone,
    toastErrorId,
  ])

  const sendEmail = useCallback(
    async (values: FormValues) => {
      const loadingToast = () =>
        toast('E-mail já está sendo enviado!', {
          ...TOAST_CONFIG,
          autoClose: 12000,
          type: toast.TYPE.INFO,
          toastId: toastLoadingId,
        })

      loadingToast()

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, service: select }),
      })

      if (response.status === 200) {
        toast.update(toastLoadingId, {
          ...TOAST_CONFIG,
          render: 'E-mail enviado com Sucesso!',
          type: toast.TYPE.SUCCESS,
          autoClose: 2500,
        })
        reset()
      }

      if (response.status === 500) {
        toast.update(toastLoadingId, {
          ...TOAST_CONFIG,
          render: 'Erro ao enviar e-mail!',
          type: toast.TYPE.ERROR,
          autoClose: 2500,
        })
      }
    },

    [reset, select, toastLoadingId],
  )

  const onChange = watch('service') as Select

  useEffect(() => {
    setSelect(onChange)
  }, [onChange, setSelect])

  useEffect(() => {
    validateForm()
  }, [validateForm])

  return (
    <section className="relative mx-0 flex h-[520px] w-11/12 max-w-[425px] flex-col">
      <ToastContainer
        className="z-50"
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Subtitle asChild>
        <h1>Solicite seu orçamento!</h1>
      </Subtitle>
      <ToastContainer className="z-50" />
      <form className="flex flex-col gap-2" onSubmit={handleSubmit(sendEmail)}>
        <div className="flex w-full items-center justify-between gap-2">
          <div className="flex w-1/2 flex-col">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              className="w-full rounded border border-solid border-black p-2"
              {...register('nome')}
            />
          </div>
          <div className="flex w-1/2 flex-col">
            <label htmlFor="service">Serviço</label>
            <select
              className="w-full rounded border border-solid border-black bg-white p-2"
              id="service"
              value={select}
              {...register('service')}
            >
              <option value="sites">Sites</option>
              <option value="maintenance">Manutenção</option>
              <option value="mounting">Montagem</option>
            </select>
          </div>
        </div>
        <div className="flex w-full items-center justify-between gap-2">
          <div className="flex w-1/2 flex-col">
            <label htmlFor="telefone">Telefone</label>
            <input
              type="text"
              className="w-full rounded border border-solid border-black p-2"
              id="telefone"
              {...register('telefone')}
            />
          </div>
          <div className="flex w-1/2 flex-col">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              className="w-full rounded border border-solid border-black p-2"
              {...register('email')}
            />
          </div>
        </div>
        <section className="h-48 w-full lg:h-60">
          <label htmlFor="mensagem">Mensagem</label>
          <textarea
            className="h-full w-full rounded border border-solid border-black p-2"
            id="mensagem"
            {...register('mensagem')}
          />
        </section>
        <button
          disabled={isSubmitting}
          className="absolute bottom-0 right-0 h-10 w-36 rounded bg-purple-500 text-lg font-bold text-white transition-all hover:opacity-80"
          id="enviar"
          name="enviar"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </section>
  )
}
