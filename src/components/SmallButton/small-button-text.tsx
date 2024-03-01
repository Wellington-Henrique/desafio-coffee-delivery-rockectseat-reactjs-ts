import { HTMLAttributes } from 'react'

interface SmallButtonTextProps extends HTMLAttributes<HTMLSpanElement> {}

export function SmallButtonText(
  { children }: SmallButtonTextProps,
  props: SmallButtonTextProps,
) {
  return <span {...props}>{children}</span>
}
