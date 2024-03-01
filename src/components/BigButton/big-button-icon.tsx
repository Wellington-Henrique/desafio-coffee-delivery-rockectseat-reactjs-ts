import { HtmlHTMLAttributes, ReactNode } from 'react'

interface BigButtonIconProps extends HtmlHTMLAttributes<SVGAElement> {
  icon: ReactNode
}

export function BigButtonIcon({ icon }: BigButtonIconProps) {
  return icon
}
