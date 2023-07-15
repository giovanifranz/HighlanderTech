import tw from 'tailwind-styled-components'

export const Container = tw.section`
mx-0 
flex 
w-11/12 
flex-col 
items-center 
justify-center 
gap-5 
md:max-w-6xl 
md:flex-row
`

export const Content = tw.article`
mx-0 
flex 
flex-1 
flex-col 
text-center 
md:text-left
`

export const Paragraph = tw.p`
my-8 
text-lg
`
