import { useCallback, useEffect, useState } from 'react'
import { Product, ProductCard } from './components/ProductCard'
import { ProductListContainer, ProductListContent } from './styles'

export function ProductList() {
  const [coffeeList, setCoffeeList] = useState<Product[]>([])

  useEffect(() => {
    getCoffees()
  }, [])

  const getCoffees = useCallback(async () => {
    const coffeesResponse = await fetch(
      'https://api-coffee-delivery-json-server.vercel.app/coffees',
      {
        method: 'GET',
      },
    )

    const coffeListData = await coffeesResponse.json()
    setCoffeeList(coffeListData)
  }, [])

  return (
    <ProductListContainer>
      <h2>Nossos cafés</h2>

      <ProductListContent>
        {coffeeList.map((coffee) => (
          <ProductCard key={coffee.id} product={coffee} />
        ))}
      </ProductListContent>
    </ProductListContainer>
  )
}
