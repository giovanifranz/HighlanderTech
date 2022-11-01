import { Subtitle } from 'components';
import { useSelect } from 'hooks/useSelect';

import { modelsContatos, SUA_DUVIDA } from './Models';

export function Cards() {
  const { select } = useSelect();

  return (
    <section className="flex-1">
      <Subtitle text="Lembre-se de informar:" />
      <div className="flex gap-2 mt-16 flex-wrap justify-center items-center">
        {modelsContatos[select][0]}
        {modelsContatos[select][1]}
        {SUA_DUVIDA}
      </div>
    </section>
  );
}
