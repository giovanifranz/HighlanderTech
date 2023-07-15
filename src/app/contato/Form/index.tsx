'use client'
import { Subtitle } from '@/components'
import * as S from './styles'
import { useQuery, useForm } from '@/hooks'

export function Form() {
  const { service } = useQuery()
  const { handleSubmit, isSubmitting, register } = useForm(service)

  return (
    <S.Container>
      <Subtitle>Solicite seu orçamento!</Subtitle>

      <S.Form onSubmit={handleSubmit((value) => console.log(value))}>
        <S.Content>
          <S.Box>
            <label htmlFor="nome">Nome</label>
            <S.Input type="text" id="nome" {...register('nome')} />
          </S.Box>
          <S.Box>
            <label htmlFor="service">Serviço</label>
            <S.Select id="service" value={service} {...register('service')}>
              <option value="sites">Sites</option>
              <option value="maintenance">Manutenção</option>
              <option value="mounting">Montagem</option>
            </S.Select>
          </S.Box>
        </S.Content>
        <S.Content>
          <S.Box>
            <label htmlFor="telefone">Telefone</label>
            <S.Input type="text" id="telefone" {...register('telefone')} />
          </S.Box>
          <S.Box>
            <label htmlFor="email">E-mail</label>
            <S.Input type="email" id="email" {...register('email')} />
          </S.Box>
        </S.Content>
        <section className="h-48 w-full lg:h-60">
          <label htmlFor="mensagem">Mensagem</label>
          <S.TextArea id="mensagem" {...register('mensagem')} />
        </section>
        <S.Button
          disabled={isSubmitting}
          id="enviar"
          name="enviar"
          type="submit"
        >
          Enviar
        </S.Button>
      </S.Form>
    </S.Container>
  )
}
