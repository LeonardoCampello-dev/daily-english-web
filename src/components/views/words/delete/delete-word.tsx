import { Box, ButtonGroup, Text } from '@chakra-ui/react'

import { ComponentType } from 'react'

import { BaseButton, BaseButtonColorsEnum } from '../../../buttons'
import { useDeleteWordModal } from './useDeleteWord'

export const DeleteWord: ComponentType<DeleteWordProps> = ({ id }) => {
  const { isDeleting, deleteWord } = useDeleteWordModal()

  return (
    <Box px={4} py={4}>
      <Text>Do you really want to delete this item?</Text>

      <Text>This action will be irreversible.</Text>

      <ButtonGroup display="flex" alignItems="center" justifyContent="flex-end" mt={4}>
        <BaseButton>Cancel</BaseButton>

        <BaseButton
          colorScheme={BaseButtonColorsEnum.ERROR}
          isLoading={isDeleting}
          onClick={() => deleteWord(id)}
        >
          Confirm
        </BaseButton>
      </ButtonGroup>
    </Box>
  )
}

type DeleteWordProps = {
  id: string
}
