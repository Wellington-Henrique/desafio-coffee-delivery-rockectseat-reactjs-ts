import { HtmlHTMLAttributes, ReactNode } from 'react'

interface ButtonIconProps extends HtmlHTMLAttributes<SVGAElement> {
  icon: ReactNode
}

export function ButtonIcon({ icon }: ButtonIconProps) {
  return icon
}
