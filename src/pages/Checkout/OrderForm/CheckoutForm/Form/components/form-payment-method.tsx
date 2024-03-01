import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'

import { ContentContainer } from '../../../../styles'
import { FormTitle } from './FormTitle'
import { Button } from '../../../../../../components/Button'
import { FormFieldsContainer } from './FormFieldsContainer'

enum PaymentMethodType {
  CREDIT = 'CREDIT',
  DEBIT = 'DEBIT',
  MONEY = 'MONEY',
}

export function FormPaymentMethod() {
  const currentType = 'CREDIT'

  return (
    <ContentContainer>
      <FormTitle.Container>
        <CurrencyDollar size={22} />
        <FormTitle.Title
          title="Pagamento"
          description="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
        />
      </FormTitle.Container>

      <FormFieldsContainer>
        <Button.Container
          isSelected={
            PaymentMethodType.CREDIT === (currentType as PaymentMethodType)
          }
        >
          <Button.Icon icon={<CreditCard size={16} />} />
          <Button.Text>Cartão de crédito</Button.Text>
        </Button.Container>

        <Button.Container
          isSelected={
            PaymentMethodType.DEBIT === (currentType as PaymentMethodType)
          }
        >
          <Button.Icon icon={<Bank size={16} />} />
          <Button.Text>Cartão de débito</Button.Text>
        </Button.Container>

        <Button.Container
          isSelected={
            PaymentMethodType.MONEY === (currentType as PaymentMethodType)
          }
        >
          <Button.Icon icon={<Money size={16} />} />
          <Button.Text>Cartão de crédito</Button.Text>
        </Button.Container>
      </FormFieldsContainer>
    </ContentContainer>
  )
}
