import { ReactNode, createContext, useState } from 'react'

export interface OrderLine {
  productId: string
  description: string
  quantity: number
  price: number
  image: string
}

interface Order {
  id: string
  orderLines: OrderLine[]
}

interface OrderType {
  order: Order
  addProductToCart: (data: OrderLine) => void
  updateProductInCart: (productId: string, quantity: number) => void
  deleteProductFromCart: (productId: string) => void
}

export const OrderContext = createContext({} as OrderType)

interface OrderContextProviderProps {
  children: ReactNode
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [order, setOrder] = useState<Order>({
    id: '1',
    orderLines: [],
  })

  function addProductToCart(data: OrderLine) {
    const newItem: OrderLine = {
      productId: data.productId,
      description: data.description,
      quantity: data.quantity,
      price: data.price,
      image: data.image,
    }

    const updatedOrderLines = [...order?.orderLines, newItem]
    const newOrder = { ...order, orderLines: updatedOrderLines } as Order

    setOrder(newOrder)
  }

  function updateProductInCart(productId: string, quantity: number) {
    const updatedOrderLines = order?.orderLines.map((line) => {
      if (line.productId === productId)
        return { ...line, quantity: line.quantity + quantity }

      return line
    })

    const newOrder = { ...order, orderLines: updatedOrderLines } as Order

    setOrder(newOrder)
  }

  function deleteProductFromCart(productId: string) {
    const orderLinesWithoutCurrentProduct = order?.orderLines.filter(
      (line) => line.productId !== productId,
    )

    const newOrder = {
      ...order,
      orderLines: orderLinesWithoutCurrentProduct,
    } as Order

    setOrder(newOrder)
  }

  return (
    <OrderContext.Provider
      value={{
        order,
        addProductToCart,
        updateProductInCart,
        deleteProductFromCart,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
