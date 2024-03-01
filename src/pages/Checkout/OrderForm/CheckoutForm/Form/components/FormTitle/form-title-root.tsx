import { ReactNode } from 'react'
import { FormTitleContainer } from './styles'

interface FormTitleProps {
  children: ReactNode
}

export function FormContainer({ children }: FormTitleProps) {
  return <FormTitleContainer>{children}</FormTitleContainer>
}
