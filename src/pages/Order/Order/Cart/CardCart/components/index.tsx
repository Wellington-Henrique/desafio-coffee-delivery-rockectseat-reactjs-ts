import { Trash } from 'phosphor-react'
import { AddRemoveProduct } from '../../../../../../components/AddRemoveProduct'

import { CardRowContainer } from '../../styles'
import { SmallButton } from '../../../../../../components/SmallButton'

export function CardRow() {
  return (
    <CardRowContainer>
      <img src="/images/coffees/expresso.png" alt="" />

      <div>
        <p>Expresso Tradicional</p>

        <div>
          <AddRemoveProduct />
          <SmallButton.Container>
            <SmallButton.Icon icon={<Trash size={16} />} />
            <SmallButton.Text>Remover</SmallButton.Text>
          </SmallButton.Container>
        </div>
      </div>

      <span className="price">R$ 9,90</span>
    </CardRowContainer>
  )
}
