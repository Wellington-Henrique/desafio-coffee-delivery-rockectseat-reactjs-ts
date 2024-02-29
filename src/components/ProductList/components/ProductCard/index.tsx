import { Minus, Plus, ShoppingCart } from "phosphor-react";

import { ProductCardContainer } from "./styles";

export interface Product {
    id: string;
    title: string;
    description: string;
    categories: Categories[];
    price: number;
    image: string;
}

interface Categories {
    id: string,
    description: string
}

interface ProductCardProps {
    product: Product
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <ProductCardContainer>
            <img src={product.image} alt="" />

            <div className="categories-carroussel">
                {product.categories.map(category => <span key={category.id} className="category">{category.description}</span>)}
            </div>

            <h3>{product.title}</h3>

            <p>{product.description}</p>

            <div className="card-footer">
                <div className="price-container">
                    <span>R$</span>
                    <span className="price">{product.price.toFixed(2)}</span>
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