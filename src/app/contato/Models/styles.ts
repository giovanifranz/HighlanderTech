import tw from 'tailwind-styled-components'

interface ContainerProps {
  isPurple?: boolean
}

export const Container = tw.div<ContainerProps>`
${({ isPurple }) =>
  isPurple ? 'border-purple-500 bg-purple-100' : 'border-cyan-400'})}

flex 
h-72 
w-52 
flex-col 
items-center 
justify-center 
gap-5 
rounded-xl 
border-4 
border-solid 
text-center 
transition-all
`

export const Title = tw.span`
text-lg 
font-bold
`

export const Description = tw.span`
w-10/12 
text-xs 
font-semibold
`
