import Image from 'next/image'
import Link from 'next/link'

import highlanderLogo from '@/assets/svgs/logo.svg'

export function Logo() {
  return (
    <Link href="/" passHref>
      <Image
        src={highlanderLogo}
        alt="Highlander Tech"
        width="195"
        height="30"
      />
    </Link>
  )
}
