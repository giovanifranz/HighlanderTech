import tw from 'tailwind-styled-components'

export const BaseSubtitle = tw.h2`
my-2
text-center
text-4xl
font-extrabold
text-black
`

export const Left = tw(BaseSubtitle)`md:text-left`

export const Right = tw(BaseSubtitle)`md:text-right`
