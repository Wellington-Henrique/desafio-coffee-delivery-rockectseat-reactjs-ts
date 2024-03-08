import { useNavigate } from 'react-router-dom'
import { ShoppingCartSimple } from 'phosphor-react'
import { BigButton } from '../../../../components/BigButton'
import { useOrder } from '../../../../hooks/useOrder'
import { currencyFormatter } from '../../../../utils/formatters'
import { CardRow } from './CardCart/components'

import {
  CardContentContainer,
  CartContainer,
  CartFooter,
  CartListContainer,
} from './styles'

export function Cart() {
  const { order } = useOrder()

  const navigate = useNavigate()

  const total = order.orderLines.reduce((total, product) => {
    return total + product.quantity * product.price
  }, 0)

  const frete = 3.5

  return (
    <CartContainer>
      <h2>Cafés selecionados</h2>
      <CardContentContainer>
        <CartListContainer>
          {order.orderLines.length ? (
            order.orderLines.map((product) => (
              <CardRow key={product.productId} product={product} />
            ))
          ) : (
            <div className="without-product-msg">
              <span>Ops! Seu carrinho está vazio...</span>

              <ShoppingCartSimple size={100} />

              <BigButton.Container type="button" onClick={() => navigate('/')}>
                Ver nossos cafés
              </BigButton.Container>
            </div>
          )}
        </CartListContainer>

        {!!order.orderLines.length && (
          <CartFooter>
            <div className="total-items">
              <span>Total de itens</span>
              <span>{currencyFormatter(total)}</span>
            </div>

            <div className="delivery-price">
              <span>Entrega</span>
              <span>{currencyFormatter(frete)}</span>
            </div>

            <div className="total">
              <span>Total</span>
              <span>{currencyFormatter(frete + total)}</span>
            </div>

            <BigButton.Container type="submit">
              CONFIRMAR PEDIDO
            </BigButton.Container>
          </CartFooter>
        )}
      </CardContentContainer>
    </CartContainer>
  )
}
