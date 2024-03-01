import styled from 'styled-components'

export const OrderCompletedContainer = styled.div`
  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: ${({ theme }) => theme['title-l-font-weight']};
    font-size: ${({ theme }) => theme['title-l-font-size']};
    line-height: ${({ theme }) => theme['title-l-font-height']};
    color: ${({ theme }) => theme['yellow-dark']};
    margin-top: 5rem;
  }

  h3 {
    font-weight: ${({ theme }) => theme['text-l-font-weight']};
    font-size: ${({ theme }) => theme['text-l-font-size']};
    line-height: ${({ theme }) => theme['text-l-font-height']};
    color: ${({ theme }) => theme['base-subtitle']};
  }

  > div {
    display: flex;
    align-items: center;
    margin-top: 2.5rem;

    gap: 6.375rem;

    > div {
      border-radius: 0.375rem 2.75rem;
      padding: 1px;

      background: ${({ theme }) =>
        `linear-gradient(to right, ${theme.yellow}, ${theme.purple})`};

      > div {
        display: flex;
        flex-direction: column;
        gap: 2rem;

        border-radius: 0.375rem 2.75rem;
        padding: 2.5rem;
        background-color: #fff;
      }
    }
  }

  .description-container {
    display: flex;
    align-items: center;

    gap: 0.75rem;

    > div:first-child {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 2rem;
      width: 2rem;
      border-radius: 50%;

      color: ${({ theme }) => theme.white};
    }

    p {
      font-weight: ${({ theme }) => theme['text-m-font-weight']};
      font-size: ${({ theme }) => theme['text-m-font-size']};
      line-height: ${({ theme }) => theme['text-m-font-height']};
      color: ${({ theme }) => theme['base-text']};
    }
  }

  .map-icon {
    background-color: ${({ theme }) => theme.purple};
  }

  .timer-icon {
    background-color: ${({ theme }) => theme.yellow};
  }

  .dollar-icon {
    background-color: ${({ theme }) => theme['yellow-dark']};
  }
`
