import { SetStateAction } from 'react';
import { ToastContainer } from 'react-toastify';
import { Field, Form, Formik } from 'formik';
import { useEmail } from 'hooks/useEmail';

import { Subtitle } from 'components/atoms';

import { useSelect } from '../../../hooks/useSelect';

import styles from './formulario.module.css';

const INITIAL_STATE: FormValues = {
  nome: '',
  email: '',
  telefone: '',
  mensagem: '',
};

export function Formulario() {
  const { select, setSelect } = useSelect();
  const sendEmail = useEmail();

  return (
    <main className={styles.container}>
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
      <Formik initialValues={INITIAL_STATE} onSubmit={sendEmail}>
        <Form className={styles.form}>
          <div className={styles['wrapper-row']}>
            <div className={styles.wrapper}>
              <label htmlFor="nome">Nome</label>
              <Field type="text" id="nome" name="nome" required />
            </div>
            <div className={styles.wrapper}>
              <label htmlFor="service">Serviço</label>
              <Field
                className={styles.service}
                as="select"
                id="service"
                name="service"
                value={select}
                onChange={(event: {
                  target: { value: SetStateAction<Select> };
                }) => setSelect(event.target.value as Select)}
              >
                <option value="sites">Sites</option>
                <option value="maintenance">Manutenção</option>
                <option value="mounting">Montagem</option>
              </Field>
            </div>
          </div>
          <div className={styles['wrapper-row']}>
            <div className={styles.wrapper}>
              <label htmlFor="telefone">Telefone</label>
              <Field type="text" id="telefone" name="telefone" />
            </div>
            <div className={styles.wrapper}>
              <label htmlFor="email">E-mail</label>
              <Field type="email" id="email" name="email" required />
            </div>
          </div>
          <section className={styles.send}>
            <label htmlFor="mensagem">Mensagem</label>
            <Field as="textarea" id="mensagem" name="mensagem" required />
          </section>
          <button
            className={styles['send-button']}
            id="enviar"
            name="enviar"
            type="submit"
          >
            Enviar
          </button>
        </Form>
      </Formik>
    </main>
  );
}
