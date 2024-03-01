import { ButtonHTMLAttributes } from 'react'
import { SmallButtonContainer } from './styles'

interface SmallButtonRootProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isSelected?: boolean
}

export function SmallButtonRoot(
  { isSelected = false, children }: SmallButtonRootProps,
  props: SmallButtonRootProps,
) {
  return (
    <SmallButtonContainer isSelected={isSelected} {...props}>
      {children}
    </SmallButtonContainer>
  )
}
