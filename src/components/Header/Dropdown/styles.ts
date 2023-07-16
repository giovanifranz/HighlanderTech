import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import tw from 'tailwind-styled-components'

export const Root = tw(DropdownMenu.Root)``

export const Trigger = tw(DropdownMenu.Trigger)`
shadow-none
focus:outline-0
md:hidden
`

export const Portal = tw(DropdownMenu.Portal)``

export const Content = tw(DropdownMenu.Content)`
flex
w-40
flex-col
gap-2
bg-white
pb-4
pr-6
pt-8
`

export const Item = tw(DropdownMenu.Item)`
text-right
text-lg
text-gray-900
`
