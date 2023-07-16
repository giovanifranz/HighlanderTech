import tw from 'tailwind-styled-components'

export const Container = tw.section`
relative 
mx-0 
flex 
h-[520px]
w-11/12 
max-w-[425px] 
flex-col
`

export const Content = tw.div`
flex 
w-full 
items-center 
justify-between 
gap-2
`

export const Form = tw.form`
flex 
flex-col 
gap-2
`

export const Input = tw.input`
w-full 

rounded 
border 
border-solid 
border-black 
p-2 

focus:border-2 
focus:border-purple-500 
focus:outline-none
`

export const Select = tw.select`
w-full 
rounded 
border 
border-solid 
border-black 
bg-white 
p-2 
focus:border-2 
focus:border-purple-500 
focus:outline-none
`

export const TextArea = tw.textarea`
h-full
w-full 
rounded 
border 
border-solid 
border-black 
p-2 
focus:border-2 
focus:border-purple-500 
focus:outline-none
`

export const Button = tw.button`
absolute 
bottom-0 
right-0 
h-10 
w-36 
rounded 
bg-purple-500 
text-lg 
font-bold 
text-white 
transition-all 
hover:opacity-80
`

export const Box = tw.div`
flex 
w-1/2 
flex-col
`
