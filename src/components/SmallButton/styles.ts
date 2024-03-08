import styled from 'styled-components'

export const SmallButtonContainer = styled.button`
  border-radius: 6px;

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
