import NextImage from 'next/image'
import styled from 'styled-components'

const ImageSM = styled(NextImage)`
  visibility: hidden;
  @media screen and (max-width: 768px) {
    visibility: visible;
    width: 100%;
  }
`
export default ImageSM
