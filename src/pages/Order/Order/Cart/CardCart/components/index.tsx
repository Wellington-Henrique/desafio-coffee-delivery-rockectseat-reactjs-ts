import { Trash } from 'phosphor-react'
import { AddRemoveProduct } from '../../../../../../components/AddRemoveProduct'

import { CardRowContainer } from '../../styles'
import { SmallButton } from '../../../../../../components/SmallButton'
import { OrderLine } from '../../../../../../contexts/OrderContext'
import { currencyFormatter } from '../../../../../../utils/formatters'
import { useOrder } from '../../../../../../hooks/useOrder'

interface CardRowProps {
  product: OrderLine
}

export function CardRow({ product }: CardRowProps) {
  const { updateProductInCart, deleteProductFromCart } = useOrder()

  function handleUpdateQuantity(quantity: number) {
    updateProductInCart(product.productId, quantity)
  }

  function handleDeleteProduct() {
    deleteProductFromCart(product.productId)
  }

  return (
    <CardRowContainer>
      <img src={product.image} alt="" />

      <div>
        <p>{product.description}</p>

        <div>
          <AddRemoveProduct
            onChange={handleUpdateQuantity}
            defaultValue={product.quantity}
          />

          <SmallButton.Container onClick={handleDeleteProduct}>
            <SmallButton.Icon icon={<Trash size={16} />} />
            <SmallButton.Text>Remover</SmallButton.Text>
          </SmallButton.Container>
        </div>
      </div>

      <span className="price">{currencyFormatter(product.price)}</span>
    </CardRowContainer>
  )
}
