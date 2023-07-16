'use client'
import { useState, useEffect } from 'react'

import { serviceStore } from '@/store/serviceStore'

import { SEU_PLANO, SUA_DUVIDA, SUA_VISAO, modelsContatos } from './Models'

export function Models() {
  const service = serviceStore((store) => store.service)
  const [selected, setSelected] = useState([SEU_PLANO, SUA_VISAO])

  useEffect(() => {
    setSelected(modelsContatos[service] || [SEU_PLANO, SUA_VISAO])
  }, [service])

  return (
    <>
      {selected[0]}
      {selected[1]}
      {SUA_DUVIDA}
    </>
  )
}
