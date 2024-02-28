import { IntroContainer, SloganContainer } from "./styles";

import coffeeArt from '../../assets/coffee-art1.svg'
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

export function Intro() {
    return (
        <IntroContainer>
            <div className="intro-content">
                <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                
                <SloganContainer>
                    <div>
                        <ShoppingCart className="cart-ico"/> 
                        <span>Compra simples e segura</span>
                    </div>

                    <div>
                        <Timer className="timer-ico"/> 
                        <span>Entrega rápida e rastreada</span>
                    </div>

                    <div>
                        <Package className="package-ico"/> 
                        <span>Embalagem mantém o café intacto</span>
                    </div>

                    <div>
                        <Coffee className="coffee-ico"/>
                        <span>O café chega fresquinho até você</span>
                    </div>
                </SloganContainer>
            </div>

            <img className="art-1" src={coffeeArt} alt="" />
        </IntroContainer>
    )
}