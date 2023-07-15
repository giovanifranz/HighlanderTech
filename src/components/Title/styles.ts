import tw from 'tailwind-styled-components'

const BaseTitle = tw.h1`
text-center
text-sm font-bold
uppercase
text-cyan-500
`

export const Left = tw(BaseTitle)`md:text-left`

export const Right = tw(BaseTitle)`md:text-right`
