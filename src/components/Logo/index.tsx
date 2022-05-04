import Image from 'next/image'
import Link from 'next/link'

import { Anchor } from './styles'

export function Logo() {
  return (
    <Link href="/" passHref>
      <Anchor>
        <Image src="/logo.png" alt="Highlander Tech" layout="fill" />
      </Anchor>
    </Link>
  )
}
