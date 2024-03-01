import styled, { css } from 'styled-components'

interface SmallButtonContainerProps {
  isSelected: boolean
}

export const SmallButtonContainer = styled.button<SmallButtonContainerProps>`
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
  gap: 0.25rem;

  border: 0;
  outline: transparent;

  padding: 0.5rem;

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
