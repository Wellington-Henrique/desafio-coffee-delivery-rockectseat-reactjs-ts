import styled from 'styled-components'

export const OrderContainer = styled.form`
  display: flex;
  width: 40rem;
  gap: 2rem;

  h2 {
    font-size: ${({ theme }) => theme['title-xs-font-size']};
    font-weight: ${({ theme }) => theme['title-xs-font-weight']};
    line-height: ${({ theme }) => theme['title-xs-font-line-height']};
    color: ${({ theme }) => theme['base-subtitle']};

    margin-bottom: 0.9375rem;
  }
`

export const CheckoutFormContainer = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2.5rem;
  background-color: ${({ theme }) => theme['base-card']};
  border-radius: 6px;
`
