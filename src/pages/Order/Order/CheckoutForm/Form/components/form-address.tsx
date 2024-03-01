import { MapPinLine } from 'phosphor-react'

import { FormTitle } from './FormTitle'

import { ContentContainer } from '../../../../styles'
import { Input } from '../../../../../../components/Input'
import { FormFieldsContainer } from './FormFieldsContainer'

export function FormAddress() {
  return (
    <ContentContainer>
      <FormTitle.Container>
        <MapPinLine size={22} />
        <FormTitle.Title
          title="Endereço de Entrega"
          description="Informe o endereço onde deseja receber seu pedido"
        />
      </FormTitle.Container>

      <FormFieldsContainer>
        <Input.Container>
          <Input.Field variantSize="12.5rem" placeholder="CEP" />
        </Input.Container>

        <Input.Container>
          <Input.Field variantSize="35rem" placeholder="Rua" />
        </Input.Container>

        <Input.Container>
          <Input.Field variantSize="12.5rem" placeholder="Número" />
        </Input.Container>

        <Input.Container>
          <Input.Field variantSize="21.75rem" placeholder="Complemento" />
          <Input.Optional />
        </Input.Container>

        <Input.Container>
          <Input.Field variantSize="12.5rem" placeholder="Bairro" />
        </Input.Container>

        <Input.Container>
          <Input.Field variantSize="17.25rem" placeholder="Cidade" />
        </Input.Container>

        <Input.Container>
          <Input.Field variantSize="3.75rem" placeholder="UF" />
        </Input.Container>
      </FormFieldsContainer>
    </ContentContainer>
  )
}
