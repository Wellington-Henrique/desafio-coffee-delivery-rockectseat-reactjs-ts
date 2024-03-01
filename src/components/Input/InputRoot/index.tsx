import { HTMLAttributes, ReactNode } from 'react'
import { RootContainer } from './style'

interface RootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function InputRoot({ children }: RootProps, props: RootProps) {
  return <RootContainer {...props}>{children}</RootContainer>
}
