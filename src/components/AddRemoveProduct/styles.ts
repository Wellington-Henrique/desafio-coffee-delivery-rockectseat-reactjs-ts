import styled from 'styled-components'

export const AddRemoveProductContainer = styled.div`
  height: 100%;

  background-color: ${({ theme }) => theme['base-button']};
  font-size: ${({ theme }) => theme['text-m-font-size']};
  color: ${({ theme }) => theme['base-title']};

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.25rem;
  padding: 0.5rem;

  border-radius: 6px;

  button {
    border: 0;
    background-color: transparent;

    svg {
      color: ${({ theme }) => theme.purple};
    }

    &:hover {
      cursor: pointer;
    }
  }
`
