import { InputHTMLAttributes } from 'react'
import { Input } from './style'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variantSize: '35rem' | '21.75rem' | '17.25rem' | '12.5rem' | '3.75rem'
}

export function InputField(props: InputProps) {
  return <Input {...props} variantSize={props.variantSize} type="text" />
}
