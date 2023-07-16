'use client'
import NextImage, { ImageProps } from 'next/image'

import { isDevEnvironment, cloudflareLoader } from '@/utils'

export function Image(props: ImageProps) {
  const loader = isDevEnvironment() ? undefined : cloudflareLoader
  return <NextImage loader={loader} {...props} />
}
