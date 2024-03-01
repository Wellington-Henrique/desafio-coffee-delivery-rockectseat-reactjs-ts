import { HTMLAttributes } from 'react'

interface BigButtonTextProps extends HTMLAttributes<HTMLSpanElement> {}

export function BigButtonText(
  { children }: BigButtonTextProps,
  props: BigButtonTextProps,
) {
  return <span {...props}>{children}</span>
}
