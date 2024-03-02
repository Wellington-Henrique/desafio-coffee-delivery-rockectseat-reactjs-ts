import { OrderCompletedContainer } from './styles'

import illustration from '../../assets/illustration.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

export function OrderCompleted() {
  document.title = 'A caminho! | Coffee Delivery'

  return (
    <OrderCompletedContainer>
      <h2>Uhu! Pedido confirmado</h2>
      <h3>Agora é só aguardar que logo o café chegará até você</h3>

      <div>
        <div>
          <div>
            <div className="description-container">
              <div className="map-icon">
                <MapPin size={16} />
              </div>

              <div>
                <p>
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                </p>
                <p>Farrapos - Porto Alegre, RS</p>
              </div>
            </div>

            <div className="description-container">
              <div className="timer-icon">
                <Timer size={16} />
              </div>

              <div>
                <p>Previsão de entrega</p>
                <p>
                  <strong>20 min - 30 min </strong>
                </p>
              </div>
            </div>

            <div className="description-container">
              <div className="dollar-icon">
                <CurrencyDollar size={16} />
              </div>

              <div>
                <p>Pagamento na entrega</p>
                <p>
                  <strong>Cartão de Crédito</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
        <img src={illustration} alt="" />
      </div>
    </OrderCompletedContainer>
  )
}
