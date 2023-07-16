import NextLink from 'next/link'
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'

import tw from 'tailwind-styled-components'

const ContainerBase = tw.section`
mx-0 
flex 
w-11/12 
flex-col 
items-center 
justify-between 
gap-2 
md:max-w-6xl 
md:flex-row
`

const ContainerLeft = tw(ContainerBase)`md:flex-row-reverse`
const ContainerRight = tw(ContainerBase)``

const ContentBase = tw.article`
relative 
flex 
w-11/12 
flex-col 
items-center 
text-center 
md:-mt-20 
md:block 
md:w-[560px] 
md:p-10
`

const ContentLeft = tw(ContentBase)`md:text-left`
const ContentRight = tw(ContentBase)`md:text-right`

export const Paragraph = tw.p`
my-8 
text-lg 
md:mb-0
`

const LinkBase = tw(NextLink)`
mb-8 
mt-2 
flex 
items-center 
justify-center 
text-lg 
font-semibold 
text-purple-500 
transition-all 
hover:cursor-pointer 
hover:opacity-70 md:absolute 
md:mb-0 
`

const LinkLeft = tw(LinkBase)`left-0 text-right md:pl-10`
const LinkRight = tw(LinkBase)`right-0 text-left md:pr-10`

export const ArrowRight = tw(BsArrowRight)`
mx-1
mt-1
text-3xl
`

export const ArrowLeft = tw(BsArrowLeft)`
mx-1
mt-1
text-3xl
`

export const Components = (isRight?: boolean) => {
  return {
    Container: isRight ? ContainerRight : ContainerLeft,
    Content: isRight ? ContentRight : ContentLeft,
    Link: isRight ? LinkRight : LinkLeft,
  }
}
