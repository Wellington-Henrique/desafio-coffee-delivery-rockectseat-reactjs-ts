import styled from 'styled-components'

export const OptionalContainer = styled.span`
  position: absolute;
  right: 0.75rem;
  font-size: 0.75rem;
  font-style: italic;
  color: ${({ theme }) => theme['base-label']};
`
