import { ProductCardContainer } from "./styles";

import img from "../../../../assets/coffees/americano.png"
import { Minus, Plus, ShoppingCart } from "phosphor-react";

export function ProductCard() {
    return (
        <ProductCardContainer>
            <img src={img} alt="" />

            <div className="categories-carroussel">
                <span className="category">TRADICIONAL</span>
                <span className="category">COM LEITE</span>
            </div>

            <h3>Expresso Cremoso</h3>

            <p>Café expresso tradicional com espuma cremosa</p>

            <div className="card-footer">
                <div className="price-container">
                    <span>R$</span>
                    <span className="price">{`9,90`}</span>
                </div>

                <span className="add-remove-container">
                    <button>
                        <Minus size={14}/> 
                    </button>

                    <span>1</span>

                    <button>
                        <Plus size={14}/>
                    </button>
                </span>
                
                <button className="btn-add-to-cart">
                    <ShoppingCart weight="fill" />
                </button>
            </div>
        </ProductCardContainer>
    )
}