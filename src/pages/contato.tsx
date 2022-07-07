import { Cards, Container, Formulario } from '../components/Contato';
import { SelectProvider } from '../hooks/useSelect';

export default function Contato() {
  return (
    <SelectProvider>
      <Container>
        <Formulario />
        <Cards />
      </Container>
    </SelectProvider>
  );
}
