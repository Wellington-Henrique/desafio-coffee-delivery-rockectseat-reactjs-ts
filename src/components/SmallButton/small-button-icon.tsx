import { HtmlHTMLAttributes, ReactNode } from 'react'

interface SmallButtonIconProps extends HtmlHTMLAttributes<SVGAElement> {
  icon: ReactNode
}

export function SmallButtonIcon({ icon }: SmallButtonIconProps) {
  return icon
}
