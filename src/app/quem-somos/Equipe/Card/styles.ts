import { TiSocialLinkedinCircular } from 'react-icons/ti'

import tw from 'tailwind-styled-components'

export const Container = tw.div`
flex 
h-64 
w-60 
flex-col
items-center 
justify-center 
rounded-2xl 
bg-cyan-400
`

export const Title = tw.h1`
text-lg 
font-bold 
text-purple-500
`

export const List = tw.div`
h-20 
flex 
flex-wrap 
gap-4 
mx-0 
justify-center 
mt-8
`

export const Item = tw.li`
before:content-['•']
before:text-purple-500
before:mr-1
`

export const LinkedIn = tw(TiSocialLinkedinCircular)`
text-purple-500
text-[100px]
`
