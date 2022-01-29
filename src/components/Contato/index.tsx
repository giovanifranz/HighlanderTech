import { Container } from './styles'
import { Formulario } from './Formulario'
import { Cards } from './Cards'
import { SelectProvider } from '../../hooks/useSelect'
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
