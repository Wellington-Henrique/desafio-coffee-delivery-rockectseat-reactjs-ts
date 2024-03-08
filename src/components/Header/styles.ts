import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 0.5rem;

  img {
    height: 2.5rem;
  }

  div {
    display: flex;
    gap: 0.5rem;

    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem;

      border-radius: 6px;
      font-size: 1.125rem;
      color: ${({ theme }) => theme['purple-dark']};
      background-color: ${({ theme }) => theme['purple-light']};

      svg {
        fill: ${({ theme }) => theme['purple-dark']};
      }
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;

      border: 0;
      background-color: ${({ theme }) => theme['yellow-light']};
      padding: 0.5rem;
      border-radius: 6px;

      svg {
        fill: ${({ theme }) => theme['yellow-dark']};
      }

      &[cart-count='0']::before {
        content: '';
        color: transparent;
      }

      &:not([cart-count='0'])::before {
        width: 1.25rem;
        height: 1.25rem;

        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;

        content: attr(cart-count);
        border-radius: 50%;
        top: -25%;
        right: -25%;

        background-color: ${({ theme }) => theme['yellow-dark']};
        font-size: ${({ theme }) => theme['text-s-font-size']};
        font-weight: bold;
        color: ${({ theme }) => theme.white};
      }
    }
  }
`
