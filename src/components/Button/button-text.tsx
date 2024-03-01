import { HTMLAttributes } from 'react'

interface ButtonTextProps extends HTMLAttributes<HTMLSpanElement> {}

export function ButtonText(
  { children }: ButtonTextProps,
  props: ButtonTextProps,
) {
  return <span {...props}>{children}</span>
}
