import { Box, ButtonGroup, Text } from '@chakra-ui/react'

import { ComponentType } from 'react'

import { BaseButton } from 'modules/buttons'
import { BaseButtonColorsEnum } from 'modules/buttons/base-button/enums'
import { DeletePhraseProps } from './types'
import { useDeletePhraseModal } from './useDeletePhrase'

export const DeletePhrase: ComponentType<DeletePhraseProps> = ({ id }) => {
  const { isDeleting, deletePhrase } = useDeletePhraseModal()

  return (
    <Box px={4} py={4}>
      <Text>Do you really want to delete this item?</Text>

      <Text>This action will be irreversible.</Text>

      <ButtonGroup display="flex" alignItems="center" justifyContent="flex-end" mt={4}>
        <BaseButton>Cancel</BaseButton>

        <BaseButton
          colorScheme={BaseButtonColorsEnum.ERROR}
          isLoading={isDeleting}
          onClick={() => deletePhrase(id)}
        >
          Confirm
        </BaseButton>
      </ButtonGroup>
    </Box>
  )
}
