import styled from 'styled-components'

export const CartContainer = styled.div`
  > div {
    display: flex;
    flex-direction: column;
    min-height: 31.125rem;
    width: 28rem;

    padding: 2.5rem;
    background-color: ${({ theme }) => theme['base-card']};
    border-radius: 0.375rem 2.75rem;
  }
`
