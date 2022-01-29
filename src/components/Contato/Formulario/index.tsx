import { Formik } from 'formik'
import {
  Title,
  Formulario as FormularioComponent,
  Label,
  Input,
  TextareaSection,
  Button
} from './styles'
export function Formulario() {
  return (
    <section>
      <Title>Solicite seu orçamento!</Title>
      <Formik
        initialValues={{
          nome: '',
          service: '',
          email: '',
          telefone: '',
          mensagem: ''
        }}
        onSubmit={async (values) => {
          const data = { ...values }
          console.log(data) /*await axios({
            method: 'post',
            url: '/api/send-email',
            headers: { 'Content-Type': 'application/json' },
            data: JSON.stringify({ data })
          })*/
        }}
      >
        <FormularioComponent className="grid-8">
          <div>
            <Label htmlFor="nome">Nome</Label>
            <Input type="text" id="nome" name="nome" required />
          </div>
          <div>
            <Label htmlFor="service">Serviço</Label>
            <Input as="select" id="service" name="service">
              <option value="sites">Sites</option>
              <option value="maintenance">Manutenção</option>
              <option value="mounting">Montagem</option>
            </Input>
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
            <Input as="textarea" id="mensagem" name="mensagem" required />
            <Button id="enviar" name="enviar" type="submit">
              Enviar
            </Button>
          </TextareaSection>
        </FormularioComponent>
      </Formik>
    </section>
  )
}
