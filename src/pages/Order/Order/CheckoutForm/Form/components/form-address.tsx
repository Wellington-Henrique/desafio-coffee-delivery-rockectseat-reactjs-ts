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
          <Input.Field
            name="cep"
            variantSize="12.5rem"
            placeholder="CEP"
            required
          />
        </Input.Container>

        <Input.Container>
          <Input.Field
            variantSize="35rem"
            placeholder="Rua"
            required
            name="address"
          />
        </Input.Container>

        <Input.Container>
          <Input.Field
            variantSize="12.5rem"
            placeholder="Número"
            required
            name="number"
          />
        </Input.Container>

        <Input.Container>
          <Input.Field
            variantSize="21.75rem"
            placeholder="Complemento"
            name="complement"
          />
          <Input.Optional />
        </Input.Container>

        <Input.Container>
          <Input.Field
            variantSize="12.5rem"
            placeholder="Bairro"
            required
            name="neighborhood"
          />
        </Input.Container>

        <Input.Container>
          <Input.Field
            variantSize="17.25rem"
            placeholder="Cidade"
            required
            name="city"
          />
        </Input.Container>

        <Input.Container>
          <Input.Field
            variantSize="3.75rem"
            placeholder="UF"
            required
            name="state"
          />
        </Input.Container>
      </FormFieldsContainer>
    </ContentContainer>
  )
}
