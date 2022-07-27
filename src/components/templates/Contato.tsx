import { SelectProvider } from 'hooks/useSelect';

import { Cards } from 'components/organisms/Cards';

function Contato() {
  return (
    <SelectProvider>
      <Cards />
    </SelectProvider>
  );
}

export { Contato };
