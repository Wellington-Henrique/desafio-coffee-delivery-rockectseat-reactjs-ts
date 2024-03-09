import { InputHTMLAttributes } from 'react'
import { Input } from './style'
import { useFormContext } from 'react-hook-form'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variantSize: '35rem' | '21.75rem' | '17.25rem' | '12.5rem' | '3.75rem'
}

export function InputField(props: InputProps) {
  const { name, variantSize, ...restProps } = props

  const { register } = useFormContext()

  return (
    <Input
      type="text"
      variantSize={variantSize}
      {...restProps}
      {...register(name!)}
    />
  )
}
