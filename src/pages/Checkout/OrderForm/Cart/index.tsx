import { CardRow } from './CardCart'

import { CartContainer } from './styles'

export function Cart() {
  return (
    <CartContainer>
      <h2>Cafés selecionados</h2>
      <div>
        <CardRow />
      </div>
    </CartContainer>
  )
}
