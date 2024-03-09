import { useState } from 'react'
import { useOrder } from '../../../../../hooks/useOrder'
import { OrderLine } from '../../../../../contexts/OrderContext'
import { currencyFormatter } from '../../../../../utils/formatters'

import { AddRemoveProduct } from '../../../../../components/AddRemoveProduct'
import { toast } from 'sonner'

import { ShoppingCart } from 'phosphor-react'

import { ProductCardContainer } from './styles'

interface Categories {
  id: string
  description: string
}

export interface Product {
  id: string
  title: string
  description: string
  categories: Categories[]
  price: number
  image: string
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [currentProduct, setCurrentProduct] = useState<OrderLine>({
    productId: product.id,
    description: product.title,
    quantity: 1,
    price: product.price,
    image: product.image,
  })

  const { order, addProductToCart, updateProductInCart } = useOrder()

  function handleAddtoCart() {
    const index = order.orderLines.findIndex(
      (product) => product.productId === currentProduct.productId,
    )

    if (index < 0) addProductToCart(currentProduct)
    else updateProductInCart(currentProduct.productId, currentProduct.quantity)

    setCurrentProduct((prev) => {
      return { ...prev, quantity: 1 }
    })

    toast.success('Café adicionado ao carrinho!')
  }

  function changeQuantity(quantity: number) {
    setCurrentProduct((prev) => {
      return { ...prev, quantity: prev.quantity + quantity }
    })
  }

  return (
    <ProductCardContainer>
      <img src={product.image} alt="" />

      <div className="categories-carroussel">
        {product.categories.map((category) => (
          <span key={category.id} className="category">
            {category.description}
          </span>
        ))}
      </div>

      <h3>{product.title}</h3>

      <p>{product.description}</p>

      <div className="card-footer">
        <div className="price-container">
          <span>R$</span>
          <span className="price">{currencyFormatter(product.price)}</span>
        </div>

        <AddRemoveProduct
          onChange={changeQuantity}
          defaultValue={currentProduct.quantity}
        />

        <button
          className="btn-add-to-cart"
          type="button"
          onClick={handleAddtoCart}
        >
          <ShoppingCart weight="fill" />
        </button>
      </div>
    </ProductCardContainer>
  )
}
