import { SetStateAction } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import axios from 'axios'
import { Field, Formik } from 'formik'

import { useSelect } from '../../../hooks/useSelect'

import { Button, Formulario as FormularioComponent, Input, Label, TextareaSection, Title } from './styles'
import 'react-toastify/dist/ReactToastify.css'

export function Formulario() {
  const { select, setSelect } = useSelect()

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
        initialValues={{
          nome: '',
          email: '',
          telefone: '',
          mensagem: '',
        }}
        onSubmit={async (values) => {
          const data = { ...values, service: select }
          console.log(data)

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
              })
            })
            .catch(() => {
              toast.error('Tente novamente em alguns minutos!', {
                position: 'top-right',
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
              })
            })
        }}
      >
        <FormularioComponent>
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
              onChange={(event: { target: { value: SetStateAction<string> } }) =>
                setSelect(event.target.value as 'sites' | 'maintenance' | 'mounting')
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
        </FormularioComponent>
      </Formik>
    </section>
  )
}
