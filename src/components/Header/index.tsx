import { MapPin, ShoppingCartSimple } from 'phosphor-react'

import logo from '../../assets/coffee-delivery-logo.svg'

import { HeaderContainer } from './styles'
import { Link } from 'react-router-dom'

export function Header() {
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

        <Link to="/order" cart-count="2">
          <ShoppingCartSimple size={22} weight="fill" />
        </Link>
      </div>
    </HeaderContainer>
  )
}
