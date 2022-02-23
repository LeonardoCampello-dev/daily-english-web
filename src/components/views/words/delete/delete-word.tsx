import { Box, Button, ButtonGroup, Text } from '@chakra-ui/react'

import { ComponentType } from 'react'

export const DeleteWord: ComponentType = () => {
  return (
    <Box px={4} py={4}>
      <Text>Do you really want to delete this item?</Text>

      <Text>This action will be irreversible.</Text>

      <ButtonGroup display="flex" alignItems="center" justifyContent="flex-end" mt={4}>
        <Button size="sm" colorScheme="gray">
          Cancel
        </Button>

        <Button size="sm" colorScheme="red">
          Confirm
        </Button>
      </ButtonGroup>
    </Box>
  )
}
