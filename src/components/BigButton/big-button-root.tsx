import { ButtonHTMLAttributes } from 'react'
import { BigButtonContainer } from './styles'

interface BigButtonRootProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function BigButtonRoot(
  { onClick, type, children }: BigButtonRootProps,
  props: BigButtonRootProps,
) {
  return (
    <BigButtonContainer {...props} type={type} onClick={onClick}>
      {children}
    </BigButtonContainer>
  )
}
