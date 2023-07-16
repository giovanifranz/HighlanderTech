import { Subtitle } from '@/components'

import { Models } from '../Models'
import * as S from './styles'

export function Cards() {
  return (
    <S.Container>
      <Subtitle>Lembre-se de informar:</Subtitle>
      <S.Content>
        <Models />
      </S.Content>
    </S.Container>
  )
}
