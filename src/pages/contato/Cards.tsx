import { Subtitle } from 'components'
import { useCallback, useEffect, useState } from 'react'
import { useSelect } from 'stores/useSelect'

import { modelsContatos, SUA_DUVIDA } from './Models'

export function Cards() {
  const { select } = useSelect()
  const [selected, setSelected] = useState<Select>('sites')

  const verifyLocalStorage = useCallback(() => {
    if (select === undefined) {
      setSelected('sites')
    } else setSelected(select)
  }, [select])

  useEffect(() => {
    verifyLocalStorage()
  }, [verifyLocalStorage])

  return (
    <section className="flex-1">
      <Subtitle>Lembre-se de informar:</Subtitle>
      <div className="mt-16 flex flex-wrap items-center justify-center gap-2">
        {modelsContatos[selected][0]}
        {modelsContatos[selected][1]}
        {SUA_DUVIDA}
      </div>
    </section>
  )
}
