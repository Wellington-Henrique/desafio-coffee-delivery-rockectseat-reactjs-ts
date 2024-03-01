import styled, { css } from 'styled-components'

interface ButtonContainerProps {
  isSelected: boolean
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 11.166875rem;

  border-radius: 6px;

  ${({ isSelected }) =>
    isSelected
      ? css`
          color: ${({ theme }) => theme['purple-dark']};
          background-color: ${({ theme }) => theme['purple-light']};
          box-shadow: 0 0 0 1px ${({ theme }) => theme.purple};
        `
      : css`
          background-color: ${({ theme }) => theme['base-button']};
        `}

  display: flex;
  align-items: center;
  gap: 0.75rem;

  border: 0;
  outline: transparent;

  padding: 1rem;

  span {
    color: ${({ theme }) => theme['base-text']};
    text-transform: uppercase;
    font-size: ${({ theme }) => theme['button-m-font-size']};
  }

  svg {
    color: ${({ theme }) => theme.purple};
  }

  &:hover {
    background-color: ${({ theme }) => theme['base-hover']};
    cursor: pointer;
  }
`
