import { ButtonHTMLAttributes } from 'react'
import { BigButtonContainer } from './styles'

interface BigButtonRootProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isSelected?: boolean
}

export function BigButtonRoot(
  { isSelected = false, children }: BigButtonRootProps,
  props: BigButtonRootProps,
) {
  return (
    <BigButtonContainer isSelected={isSelected} {...props}>
      {children}
    </BigButtonContainer>
  )
}
