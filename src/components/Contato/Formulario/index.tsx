import { SetStateAction, useCallback } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Field, Formik } from 'formik';

import { useSelect } from '../../../hooks/useSelect';

import {
  Button,
  Form,
  Input,
  Label,
  TextareaSection,
  Title,
  ToastContainer,
} from './styles';
import 'react-toastify/dist/ReactToastify.css';

type FormValues = { nome: string; email: string; telefone: string; mensagem: string };

export function Formulario() {
  const { select, setSelect } = useSelect();

  const sendForm = useCallback(async (values: FormValues) => {
    const data = { ...values, service: select };
    await axios({
      method: 'post',
      url: '/api/send-email',
      headers: { 'Content-Type': 'application/json' },
      data: JSON.stringify({ data }),
    })
      .then(() => {
        toast.success('Email enviado com Sucesso!', {
          position: 'top-right',
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((error: Error) => {
        toast.error(error.message, {
          position: 'top-right',
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      });
  }, []);

  return (
    <section>
      <ToastContainer
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
      <Title>Solicite seu orçamento!</Title>
      <ToastContainer />
      <Formik
        initialValues={
          {
            nome: '',
            email: '',
            telefone: '',
            mensagem: '',
          } as FormValues
        }
        onSubmit={sendForm}
      >
        <Form>
          <div>
            <Label htmlFor="nome">Nome</Label>
            <Input type="text" id="nome" name="nome" required />
          </div>
          <div>
            <Label htmlFor="service">Serviço</Label>
            <Field
              as="select"
              id="service"
              name="service"
              value={select}
              onChange={(event: { target: { value: SetStateAction<Select> } }) =>
                setSelect(event.target.value as Select)
              }
            >
              <option value="sites">Sites</option>
              <option value="maintenance">Manutenção</option>
              <option value="mounting">Montagem</option>
            </Field>
          </div>
          <div>
            <Label htmlFor="telefone">Telefone</Label>
            <Input type="text" id="telefone" name="telefone" />
          </div>
          <div>
            <Label htmlFor="email">E-mail</Label>
            <Input type="email" id="email" name="email" required />
          </div>
          <TextareaSection>
            <Label htmlFor="mensagem">Mensagem</Label>
            <Field as="textarea" id="mensagem" name="mensagem" required />
            <Button id="enviar" name="enviar" type="submit">
              Enviar
            </Button>
          </TextareaSection>
        </Form>
      </Formik>
    </section>
  );
}
