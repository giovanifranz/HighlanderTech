import Link from 'next/link'

import tw from 'tailwind-styled-components'

export const Container = tw(Link)`
relative
flex
h-52
w-4/5
max-w-[352px]
justify-center
rounded-3xl
bg-cover
bg-center
hover:opacity-75
`

export const Content = tw.div`
absolute
bottom-0
flex
w-full
flex-col
items-center
gap-2
rounded-b-3xl
bg-black/50
p-2
text-center`

export const Demo = tw.span`
absolute
bottom-2
right-4
text-lg
text-white
`
export const Subtitle = tw.h2`
text-2xl
text-white
`
