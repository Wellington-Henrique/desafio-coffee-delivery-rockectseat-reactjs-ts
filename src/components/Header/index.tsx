import { MapPin, ShoppingCartSimple } from "phosphor-react";

import logo from '../../assets/coffee-delivery-logo.svg'

import { HeaderContainer } from "./styles";

export function Header() {
    return(
        <HeaderContainer>
            <img src={logo} alt="" />
            <div>
                <span>
                    <MapPin size={22}/>
                    Itapetininga, SP
                </span>
                <button>
                    <ShoppingCartSimple size={22}/>
                </button>
            </div>
        </HeaderContainer>
    )
}