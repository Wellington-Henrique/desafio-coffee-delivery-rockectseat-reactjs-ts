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
  cep: string
  address: string
  number: string
  city: string
  state: string
  paymentType: string
  orderLines: OrderLine[]
}

interface OrderType {
  order: Order
  createNewOrder: () => Promise<void>
  addProductToCart: (data: OrderLine) => void
  updateProductInCart: (productId: string, quantity: number) => void
  deleteProductFromCart: (productId: string) => void
}

export const OrderContext = createContext({} as OrderType)

interface OrderContextProviderProps {
  children: ReactNode
}

const inititalStates = {
  id: '1',
  cep: '',
  address: '',
  number: '',
  city: '',
  state: '',
  paymentType: '',
  orderLines: [],
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [order, setOrder] = useState<Order>(inititalStates)

  async function createNewOrder() {
    console.log('ordem criada com sucesso!')
    clearCart()
  }

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

  function clearCart() {
    setOrder(inititalStates)
  }

  return (
    <OrderContext.Provider
      value={{
        order,
        createNewOrder,
        addProductToCart,
        updateProductInCart,
        deleteProductFromCart,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
