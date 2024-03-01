import { Minus, Plus } from 'phosphor-react'

import { AddRemoveProductContainer } from './styles'

export function AddRemoveProduct() {
  return (
    <AddRemoveProductContainer>
      <button>
        <Minus weight="bold" size={14} />
      </button>

      <span>1</span>

      <button>
        <Plus weight="bold" size={14} />
      </button>
    </AddRemoveProductContainer>
  )
}
