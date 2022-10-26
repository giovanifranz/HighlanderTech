import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import type { ToastOptions } from 'react-toastify';
import { toast, ToastContainer } from 'react-toastify';

import { Subtitle } from 'components/atoms';

import { useSelect } from '../../../hooks/useSelect';

import styles from './formulario.module.css';

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
    <section className={styles.container}>
      <ToastContainer
        className={styles['toast-alert']}
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
      <ToastContainer className={styles['toast-alert']} />
      <form className={styles.form} onSubmit={handleSubmit(sendEmail)}>
        <div className={styles['wrapper-row']}>
          <div className={styles.wrapper}>
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              {...register('nome', { required: true })}
            />
          </div>
          <div className={styles.wrapper}>
            <label htmlFor="service">Serviço</label>
            <select
              className={styles.service}
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
        <div className={styles['wrapper-row']}>
          <div className={styles.wrapper}>
            <label htmlFor="telefone">Telefone</label>
            <input
              type="text"
              id="telefone"
              {...register('telefone', { required: true })}
            />
          </div>
          <div className={styles.wrapper}>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              {...register('email', { required: true, pattern: regex })}
            />
          </div>
        </div>
        <section className={styles.send}>
          <label htmlFor="mensagem">Mensagem</label>
          <textarea
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
