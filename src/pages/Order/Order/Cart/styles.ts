import styled from 'styled-components'

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 31.125rem;
  max-height: 36.9375rem;
  min-width: 28rem;
`

export const CardContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-content: space-between;

  flex: 1;
  background-color: ${({ theme }) => theme['base-card']};
  border-radius: 0.375rem 2.75rem;
  padding: 2.5rem 2rem 2.5rem 2.5rem;

  overflow: hidden;
`

export const CartListContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  overflow-y: auto;

  padding-bottom: 1.5rem;

  div + div {
    width: 100%;

    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid ${({ theme }) => theme['base-button']};
  }

  .without-product-msg {
    height: 100%;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    gap: 1rem;

    span,
    svg {
      text-align: center;

      font-size: ${({ theme }) => theme['title-l-font-size']};
      font-weight: ${({ theme }) => theme['title-l-font-weight']};

      opacity: 0.45;
    }
  }
`

export const CardRowContainer = styled.div`
  display: flex;
  gap: 1.25rem;
  padding-right: 0.5rem;

  img {
    width: 4rem;
    height: 4rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    flex: 1;

    font-size: ${({ theme }) => theme['text-m-font-size']};
    font-weight: ${({ theme }) => theme['text-m-font-weight']};
    line-height: ${({ theme }) => theme['text-m-font-line-height']};
    color: ${({ theme }) => theme['base-subtitle']};

    > div {
      display: flex;
      gap: 0.5rem;
    }
  }

  .price {
    font-size: ${({ theme }) => theme['text-m-font-size']};
    font-weight: ${({ theme }) => theme['text-m-font-weight']};
    line-height: ${({ theme }) => theme['text-m-font-line-height']};
    color: ${({ theme }) => theme['base-text']};
  }
`

export const CartFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-top: 1.5rem;

  border-top: 1px solid ${({ theme }) => theme['base-button']};

  div {
    display: flex;
    justify-content: space-between;
  }

  .total-items,
  .delivery-price {
    font-size: ${({ theme }) => theme['text-m-font-size']};
    font-weight: ${({ theme }) => theme['text-m-font-weight']};
    line-height: ${({ theme }) => theme['text-m-font-line-height']};
    color: ${({ theme }) => theme['base-text']};
  }

  .total {
    font-size: ${({ theme }) => theme['text-l-font-size']};
    font-weight: ${({ theme }) => theme['text-l-font-weight']};
    line-height: ${({ theme }) => theme['text-l-font-line-height']};
    color: ${({ theme }) => theme['base-subtitle']};
  }
`
