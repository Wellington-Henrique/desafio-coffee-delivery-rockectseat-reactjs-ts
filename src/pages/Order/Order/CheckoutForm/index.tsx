import { CheckoutFormContainer } from '../../styles'
import { Form } from './Form'

export function CheckoutForm() {
  return (
    <CheckoutFormContainer>
      <h2>Complete seu pedido</h2>

      <div>
        <Form.Address />
        <Form.PaymentMethod />
      </div>
    </CheckoutFormContainer>
  )
}
