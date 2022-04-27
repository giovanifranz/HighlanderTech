import { SelectProvider } from '../../hooks/useSelect'

import { Cards } from './Cards'
import { Formulario } from './Formulario'
import { Container } from './styles'

export function Contato() {
  return (
    <SelectProvider>
      <Container>
        <Formulario />
        <Cards />
      </Container>
    </SelectProvider>
  )
}
