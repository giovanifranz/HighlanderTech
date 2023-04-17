import Link from 'next/link'
import Image from 'next/image'
import highlanderLogo from '../../assets/svgs/logo.svg'

function Logo() {
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

export { Logo }
