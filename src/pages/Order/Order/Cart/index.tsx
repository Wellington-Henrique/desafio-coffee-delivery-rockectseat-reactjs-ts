import { BigButton } from '../../../../components/BigButton'
import { CardRow } from './CardCart/components'

import {
  CardContentContainer,
  CartContainer,
  CartFooter,
  CartListContainer,
} from './styles'

export function Cart() {
  return (
    <CartContainer>
      <h2>Cafés selecionados</h2>
      <CardContentContainer>
        <CartListContainer>
          <CardRow />
          <CardRow />
          <CardRow />
          <CardRow />
          <CardRow />
          <CardRow />
          <CardRow />
          <CardRow />
          <CardRow />
          <CardRow />
          <CardRow />
        </CartListContainer>
        <CartFooter>
          <div className="total-items">
            <span>Total de itens</span>
            <span>R$ 29,70</span>
          </div>

          <div className="delivery-price">
            <span>Entrega</span>
            <span>R$ 3,50</span>
          </div>

          <div className="total">
            <span>Total</span>
            <span>R$ 9,90</span>
          </div>

          <BigButton.Container type="submit">
            CONFIRMAR PEDIDO
          </BigButton.Container>
        </CartFooter>
      </CardContentContainer>
    </CartContainer>
  )
}
