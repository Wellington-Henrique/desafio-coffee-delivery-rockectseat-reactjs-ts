import { useNavigate } from 'react-router-dom'
import { Cart } from './Order/Cart'
import { CheckoutForm } from './Order/CheckoutForm'

import { OrderContainer } from './styles'
import { FormEvent } from 'react'

export function Order() {
  const navigate = useNavigate()

  document.title = 'Pedido | Coffee Delivery'

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    navigate('/completed')
  }

  return (
    <OrderContainer onSubmit={handleSubmit}>
      <CheckoutForm />
      <Cart />
    </OrderContainer>
  )
}
