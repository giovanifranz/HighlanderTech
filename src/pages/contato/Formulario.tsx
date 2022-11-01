import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import type { ToastOptions } from 'react-toastify';
import { toast, ToastContainer } from 'react-toastify';

import { Subtitle } from 'components';
import { useSelect } from 'hooks/useSelect';

const regex = new RegExp(
  '^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|' +
    '(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])' +
    '|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
);

const TOAST_CONFIG: ToastOptions = {
  position: 'top-right',
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
};

export function Formulario() {
  const { select, setSelect } = useSelect();

  const INITIAL_STATE: FormValues = {
    service: select,
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
  };

  const { register, handleSubmit, watch, reset } = useForm<FormValues>({
    defaultValues: INITIAL_STATE,
  });

  const onChange = watch('service') as Select;

  const sendEmail = useCallback(
    async (values: FormValues) => {
      const data = { ...values, service: select };
      const response = await toast.promise(
        fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        }),
        {
          pending: 'E-mail já está sendo enviado!',
          success: 'E-mail enviado com Sucesso!',
          error: 'Erro ao enviar e-mail!',
        },
        TOAST_CONFIG,
      );
      if (response.ok) {
        reset();
      }
    },
    [reset, select],
  );

  useEffect(() => {
    setSelect(onChange);
  }, [onChange, setSelect]);

  return (
    <section className="relative flex flex-col w-11/12 mx-0 max-w-[425px] h-[520px]">
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
      <Subtitle text="Solicite seu orçamento!" />
      <ToastContainer className="z-50" />
      <form className="flex flex-col gap-2" onSubmit={handleSubmit(sendEmail)}>
        <div className="flex items-center gap-2 justify-between w-full">
          <div className="flex flex-col w-1/2">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              className="w-full border border-solid border-black rounded p-2"
              {...register('nome', { required: true })}
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label htmlFor="service">Serviço</label>
            <select
              className="w-full border border-solid border-black rounded p-2 bg-white"
              id="service"
              value={select}
              {...register('service', { required: true })}
            >
              <option value="sites">Sites</option>
              <option value="maintenance">Manutenção</option>
              <option value="mounting">Montagem</option>
            </select>
          </div>
        </div>
        <div className="flex items-center gap-2 justify-between w-full">
          <div className="flex flex-col w-1/2">
            <label htmlFor="telefone">Telefone</label>
            <input
              type="text"
              className="w-full border border-solid border-black rounded p-2"
              id="telefone"
              {...register('telefone', { required: true })}
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              className="w-full border border-solid border-black rounded p-2"
              {...register('email', { required: true, pattern: regex })}
            />
          </div>
        </div>
        <section className="h-48 lg:h-60 w-full">
          <label htmlFor="mensagem">Mensagem</label>
          <textarea
            className="w-full border border-solid border-black rounded p-2 h-full"
            id="mensagem"
            {...register('mensagem', { required: true })}
          />
        </section>
        <button
          className="absolute bottom-0 right-0 h-10 text-lg font-bold text-white bg-purple-200 rounded w-36 transition-all hover:opacity-80"
          id="enviar"
          name="enviar"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}
