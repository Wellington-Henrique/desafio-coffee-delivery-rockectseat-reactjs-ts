import { useEffect, useState } from "react";
import { Product, ProductCard } from "./components/ProductCard";
import { ProductListContainer, ProductListContent } from "./styles";

export function ProductList() {
    const [coffeeList, setCoffeeList] = useState<Product[]>([])

    useEffect(() => {
        (async () => {
            const coffeesResponse = await fetch('http://localhost:3000/coffees', {
                method: 'GET'
            })

            const coffeListData = await coffeesResponse.json();
            console.log(coffeListData)
            setCoffeeList(coffeListData)
        })()
    }, [])

    return (
        <ProductListContainer>
            <h2>Nossos cafés</h2>

            <ProductListContent>
                {coffeeList.map((coffee) => <ProductCard key={coffee.id} product={coffee}/>)}
            </ProductListContent>
        </ProductListContainer>
    )
}