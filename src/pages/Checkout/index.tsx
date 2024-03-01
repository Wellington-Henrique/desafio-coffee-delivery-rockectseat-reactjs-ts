import { Cart } from './OrderForm/Cart'
import { CheckoutForm } from './OrderForm/CheckoutForm'

import { OrderContainer } from './styles'

export function Checkout() {
  return (
    <OrderContainer>
      <CheckoutForm />
      <Cart />
    </OrderContainer>
  )
}
