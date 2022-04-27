import NextImage from 'next/image'
import styled from 'styled-components'

const Image = styled(NextImage)`
  visibility: visible;
  @media screen and (max-width: 768px) {
    visibility: hidden;
    width: 100%;
  }
`

export default Image
