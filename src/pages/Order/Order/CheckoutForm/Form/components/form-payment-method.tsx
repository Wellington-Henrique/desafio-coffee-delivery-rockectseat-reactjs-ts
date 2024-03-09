import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'

import { ContentContainer } from '../../../../styles'
import { FormTitle } from './FormTitle'
import { Button } from '../../../../../../components/Button'
import { FormFieldsContainer } from './FormFieldsContainer'
import { useFormContext } from 'react-hook-form'

enum PaymentMethodType {
  CREDIT = 'CREDIT',
  DEBIT = 'DEBIT',
  MONEY = 'MONEY',
}

export function FormPaymentMethod() {
  const { setValue, watch } = useFormContext()

  function handleChange(paymentType: PaymentMethodType) {
    setValue('paymentType', paymentType)
  }

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
          type="button"
          isSelected={
            PaymentMethodType.CREDIT ===
            (watch('paymentType') as PaymentMethodType)
          }
          onClick={() => handleChange(PaymentMethodType.CREDIT)}
        >
          <Button.Icon icon={<CreditCard size={16} />} />
          <Button.Text>Cartão de crédito</Button.Text>
        </Button.Container>

        <Button.Container
          type="button"
          isSelected={
            PaymentMethodType.DEBIT ===
            (watch('paymentType') as PaymentMethodType)
          }
          onClick={() => handleChange(PaymentMethodType.DEBIT)}
        >
          <Button.Icon icon={<Bank size={16} />} />
          <Button.Text>Cartão de débito</Button.Text>
        </Button.Container>

        <Button.Container
          type="button"
          isSelected={
            PaymentMethodType.MONEY ===
            (watch('paymentType') as PaymentMethodType)
          }
          onClick={() => handleChange(PaymentMethodType.MONEY)}
        >
          <Button.Icon icon={<Money size={16} />} />
          <Button.Text>Dinheiro</Button.Text>
        </Button.Container>
      </FormFieldsContainer>
    </ContentContainer>
  )
}
