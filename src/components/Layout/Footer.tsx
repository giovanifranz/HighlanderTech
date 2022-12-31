import { Link } from 'components'
import { Logo } from './Logo'

import { RiFacebookFill, RiInstagramFill, RiWhatsappFill } from 'react-icons/ri'

const styledIcon = 'text-purple-500 ml-3 md:ml-0 text-2xl hover:opacity-70'

function Footer() {
  return (
    <footer
      className={
        'inset-x-0 bottom-0 flex flex-col items-center justify-center bg-white p-2 shadow-md shadow-black md:fixed md:px-0'
      }
    >
      <div
        className={
          'mx-0 flex w-4/5 max-w-7xl flex-col items-center justify-between  md:flex-row'
        }
      >
        <nav
          className={'flex w-80 items-center justify-between'}
          aria-label="footer"
        >
          <Logo />
          <Link
            href="https://api.whatsapp.com/send?phone=555199188952"
            target="_blank"
          >
            <RiWhatsappFill className={styledIcon} aria-label="whatsapp" />
          </Link>
          <Link
            href="https://www.instagram.com/highlandertechbr/"
            target="_blank"
          >
            <RiInstagramFill
              className={styledIcon}
              target="_blank"
              aria-label="instagram"
            />
          </Link>
          <Link href="https://www.facebook.com/Highlandertech" target="_blank">
            <RiFacebookFill className={styledIcon} aria-label="facebook" />
          </Link>
        </nav>
        <p className={'mt-4 flex-1 text-center text-xs md:text-right'}>
          HIGHLANDER COMERCIO VAREJISTA E DESENVOLVIMENTO DE SOFTWARES LTDA
          <br />
          CNPJ 42.295.929/0001-35
        </p>
      </div>
    </footer>
  )
}

export { Footer }
