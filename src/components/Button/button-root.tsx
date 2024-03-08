import { ButtonHTMLAttributes } from 'react'
import { ButtonContainer } from './styles'

interface ButtonRootProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isSelected?: boolean
}

export function ButtonRoot(
  { type, onClick, isSelected = false, children }: ButtonRootProps,
  props: ButtonRootProps,
) {
  return (
    <ButtonContainer
      {...props}
      isSelected={isSelected}
      type={type}
      onClick={onClick}
    >
      {children}
    </ButtonContainer>
  )
}
