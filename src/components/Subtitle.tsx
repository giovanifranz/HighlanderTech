import { Slot } from '@radix-ui/react-slot'
import { HTMLAttributes } from 'react'

type Props = {
  isRight?: boolean
  asChild?: boolean
} & HTMLAttributes<HTMLHeadElement>

function Subtitle({ asChild, isRight = false, ...props }: Props) {
  const Component = asChild ? Slot : 'h2'

  return (
    <Component
      className={`my-2 text-center text-4xl font-extrabold text-black ${
        isRight ? 'md:text-right' : 'md:text-left'
      }`}
      {...props}
    />
  )
}

export { Subtitle }
export type { Props as SubtitleProps }
