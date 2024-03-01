import { DetailsHTMLAttributes, ReactNode } from 'react'

import { FieldsContainer } from './styles'

interface FormFieldsProps extends DetailsHTMLAttributes<ReactNode> {}

export function FormFieldsContainer({ children }: FormFieldsProps) {
  return <FieldsContainer>{children}</FieldsContainer>
}
