import { Formulario } from './Formulario';
import { Cards } from './Cards';

export default function Contato() {
  return (
    <div className="flex flex-col md:flex-row w-11/12 md:max-w-6xl gap-8 md:gap-20 mx-0 items-center md:items-start justify-between">
      <Formulario />
      <Cards />
    </div>
  );
}
