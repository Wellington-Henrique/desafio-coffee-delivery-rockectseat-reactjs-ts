import { MouseEvent, useEffect, useState } from 'react'

import { Minus, Plus } from 'phosphor-react'

import { AddRemoveProductContainer } from './styles'

interface AddRemoveProductProps {
  defaultValue?: number
  onChange: (quantity: number) => void
}

export function AddRemoveProduct({
  onChange,
  defaultValue = 1,
}: AddRemoveProductProps) {
  const [quantity, setQuantity] = useState<number>(defaultValue)

  useEffect(() => {
    setQuantity(defaultValue)
  }, [defaultValue])

  function handleAdd(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault()

    setQuantity((prev) => prev + 1)
    onChange(+1)
  }

  function handleDelete(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault()

    onChange(-1)

    setQuantity((prev) => {
      if (prev > 1) return prev - 1

      return 1
    })
  }

  return (
    <AddRemoveProductContainer>
      <button onClick={handleDelete}>
        <Minus weight="bold" size={14} />
      </button>

      <span>{quantity}</span>

      <button onClick={handleAdd}>
        <Plus weight="bold" size={14} />
      </button>
    </AddRemoveProductContainer>
  )
}
