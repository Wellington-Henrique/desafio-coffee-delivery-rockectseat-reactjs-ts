import { useNavigate } from 'react-router-dom'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { Cart } from './Order/Cart'
import { CheckoutForm } from './Order/CheckoutForm'

import { OrderContainer } from './styles'
import { useOrder } from '../../hooks/useOrder'

interface Order {
  cep: string
  address: string
  number: string
  complement: string
  neighborhood: string
  city: string
  state: string
  paymentType: string
}

const checkoutFormSchema = z.object({
  cep: z.string().max(10, 'Tamanho máximo 10 caracteres'),
  address: z.string().max(100, 'Tamanho máximo 100 caracteres'),
  number: z.string().max(10, 'Tamanho máximo 10 caracteres'),
  complement: z.string().max(100, 'Tamanho máximo 100 caracteres'),
  neighborhood: z.string().max(100, 'Tamanho máximo 100 caracteres'),
  city: z.string().max(100, 'Tamanho máximo 100 caracteres'),
  state: z.string().max(2, 'Tamanho máximo 2 caracteres'),
  paymentType: z.enum(['DEBIT', 'CREDIT', 'MONEY']),
})

type CheckoutFormInputs = z.infer<typeof checkoutFormSchema>

export function Order() {
  const { createNewOrder } = useOrder()

  const navigate = useNavigate()
  const methods = useForm<CheckoutFormInputs>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      cep: '',
      address: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
      paymentType: 'CREDIT',
    },
  })

  const { reset, handleSubmit } = methods

  document.title = 'Pedido | Coffee Delivery'

  async function handleNewOrder(data: Order) {
    console.log(data)
    await createNewOrder()
    reset()
    navigate('/completed')
  }

  return (
    <OrderContainer onSubmit={handleSubmit(handleNewOrder)}>
      <FormProvider {...methods}>
        <CheckoutForm />
        <Cart />
      </FormProvider>
    </OrderContainer>
  )
}
