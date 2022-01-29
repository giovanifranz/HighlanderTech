import styled from 'styled-components'
import NextImage from 'next/image'

export const Container = styled.section`
  width: 1268px;
  margin: 0 auto;
  text-align: center;
  margin-top: 40px;

  h3 {
    font-size: 2.5rem;
    font-weight: 800;
    line-height: 3.75rem;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    padding: 20px;
  }
`

export const Image = styled(NextImage)`
  visibility: visible;
  @media screen and (max-width: 768px) {
    visibility: hidden;
    width: 100%;
  }
`
export const ImageSM = styled(NextImage)`
  visibility: hidden;
  @media screen and (max-width: 768px) {
    visibility: visible;
    width: 100%;
  }
`
