import { useContext } from 'react'
import { OrderContext } from '../contexts/OrderContext'

export function useOrder() {
  const context = useContext(OrderContext)
  return context
}
