import tw from 'tailwind-styled-components'
import { RiFacebookFill, RiInstagramFill, RiWhatsappFill } from 'react-icons/ri'

export const Container = tw.footer`
inset-x-0
bottom-0
flex
flex-col
items-center
justify-center
bg-white
p-2
shadow-md
shadow-black
md:fixed
md:px-0
`

export const Content = tw.div`
mx-0
flex
w-4/5
max-w-7xl
flex-col
items-center
justify-between
md:flex-row`

const BaseIcon = ``

export const Facebook = tw(RiFacebookFill)`
text-purple-500 
ml-3 
md:ml-0 
text-2xl 
hover:opacity-70
`
export const Instagram = tw(RiInstagramFill)`
text-purple-500 
ml-3 
md:ml-0 
text-2xl 
hover:opacity-70
`
export const WhatsApp = tw(RiWhatsappFill)`
text-purple-500
ml-3 
md:ml-0 
text-2xl 
hover:opacity-70
`

export const Navigation = tw.nav`
flex 
w-80 
items-center 
justify-between
`

export const Info = tw.span`
mt-4 
flex-1 
text-center 
text-xs 
md:text-right
`
