import { ButtonHTMLAttributes } from 'react'
import { SmallButtonContainer } from './styles'

interface SmallButtonRootProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isSelected?: boolean
}

export function SmallButtonRoot(
  { type, onClick, children }: SmallButtonRootProps,
  props: SmallButtonRootProps,
) {
  return (
    <SmallButtonContainer {...props} type={type} onClick={onClick}>
      {children}
    </SmallButtonContainer>
  )
}
