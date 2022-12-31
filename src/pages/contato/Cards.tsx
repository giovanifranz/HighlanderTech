import { Subtitle } from 'components'
import { useSelect } from 'hooks/useSelect'

import { modelsContatos, SUA_DUVIDA } from './Models'

export function Cards() {
  const { select } = useSelect()

  return (
    <section className="flex-1">
      <Subtitle>Lembre-se de informar:</Subtitle>
      <div className="mt-16 flex flex-wrap items-center justify-center gap-2">
        {modelsContatos[select][0]}
        {modelsContatos[select][1]}
        {SUA_DUVIDA}
      </div>
    </section>
  )
}
