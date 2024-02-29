import { ProductCard } from "./components/ProductCard";
import { ProductListContainer, ProductListContent } from "./styles";

export function ProductList() {
    return (
        <ProductListContainer>
            <h2>Nossos cafés</h2>

            <ProductListContent>
                {Array.from({length: 11}).map((_, index) => <ProductCard />)}
            </ProductListContent>
        </ProductListContainer>
    )
}