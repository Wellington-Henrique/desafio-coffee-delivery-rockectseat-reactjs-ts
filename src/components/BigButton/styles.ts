import styled from 'styled-components'

export const BigButtonContainer = styled.button`
  background-color: ${({ theme }) => theme.yellow};
  border-radius: 6px;
  border: 0;

  padding: 0.75rem 0.5rem;

  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme['buton-g-size']};
  font-weight: ${({ theme }) => theme['button-g-font-weight']};
  line-height: ${({ theme }) => theme['buton-g-line-height']};

  transition: ease-in-out 0.1s;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme['yellow-dark']};
  }
`
