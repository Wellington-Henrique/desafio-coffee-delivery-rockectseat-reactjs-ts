import { MapPin, ShoppingCartSimple } from 'phosphor-react'

import logo from '../../assets/coffee-delivery-logo.svg'

import { HeaderContainer } from './styles'
import { Link } from 'react-router-dom'
import { useOrder } from '../../hooks/useOrder'

export function Header() {
  const { order } = useOrder()

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>

      <div>
        <span>
          <MapPin size={22} weight="fill" />
          Itapetininga, SP
        </span>

        <Link to="/order" cart-count={order.orderLines.length}>
          <ShoppingCartSimple size={22} weight="fill" />
        </Link>
      </div>
    </HeaderContainer>
  )
}
