import { ButtonHTMLAttributes } from 'react'
import { ButtonContainer } from './styles'

interface ButtonRootProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isSelected?: boolean
}

export function ButtonRoot(
  { isSelected = false, children }: ButtonRootProps,
  props: ButtonRootProps,
) {
  return (
    <ButtonContainer isSelected={isSelected} {...props}>
      {children}
    </ButtonContainer>
  )
}
