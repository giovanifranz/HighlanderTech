import tw from 'tailwind-styled-components'

export const Container = tw.section`
mt-10 
flex 
items-center
`

export const Content = tw.div`
flex 
items-center 
gap-5 
md:gap-0 
flex-col 
md:flex-row

before:content-['']
after:content-['']

before:w-10
before:h-10
before:mx-10
before:rounded-full
before:bg-cyan-400
before:hidden
before:md:block

after:w-10
after:h-10
after:mx-10
after:rounded-full
after:bg-cyan-400
after:hidden
after:md:block
`

export const Circle = tw.div`
mx-10 
h-10 
w-10 
rounded-full 
bg-cyan-400
`
