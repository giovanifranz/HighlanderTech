'use client'

import { Subtitle } from '@/components'
import { Models } from '../Models'
import { useSearchParams } from 'next/navigation'
import * as S from './styles'

export function Cards() {
  const searchParams = useSearchParams()
  const service = searchParams.get('service')

  return (
    <S.Container>
      <Subtitle>Lembre-se de informar:</Subtitle>
      <S.Content>
        <Models service={service} />
      </S.Content>
    </S.Container>
  )
}
