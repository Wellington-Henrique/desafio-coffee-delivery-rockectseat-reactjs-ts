import styled from 'styled-components'

interface InputProps {
  variantSize?: '35rem' | '21.75rem' | '17.25rem' | '12.5rem' | '3.75rem'
}

export const Input = styled.input<InputProps>`
  padding: 0.75rem;
  flex: 1;

  height: 2.625rem;

  font-size: ${({ theme }) => theme['text-s-font-size']};
  line-height: ${({ theme }) => theme['text-s-font-line-height']};
  color: ${({ theme }) => theme['base-text']};

  background-color: transparent;

  border: none;

  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme['base-button']};

  background-color: ${({ theme }) => theme['base-input']};

  width: ${({ variantSize }) => variantSize};
`
