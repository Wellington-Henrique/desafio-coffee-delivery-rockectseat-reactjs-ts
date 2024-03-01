import styled from 'styled-components'

export const FormTitleContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${({ theme }) => theme['yellow-dark']};
  }

  > div {
    display: flex;
    flex-direction: column;

    h3 {
      font-size: ${({ theme }) => theme['text-m-font-size']};
      font-weight: ${({ theme }) => theme['text-m-font-weight']};
      line-height: ${({ theme }) => theme['text-m-font-line-height']};
      color: ${({ theme }) => theme['base-subtitle']};
    }

    span {
      font-size: ${({ theme }) => theme['text-s-font-size']};
      font-weight: ${({ theme }) => theme['text-s-font-weight']};
      line-height: ${({ theme }) => theme['text-s-font-line-height']};
      color: ${({ theme }) => theme['base-text']};
    }
  }
`
