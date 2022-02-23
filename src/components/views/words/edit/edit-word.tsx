import { Box, Input, Textarea, Button, ButtonGroup } from '@chakra-ui/react'

import { ComponentType } from 'react'

export const EditWord: ComponentType = () => {
  return (
    <Box px={4} py={4}>
      <Input
        borderRadius={4}
        isRequired
        focusBorderColor="primary.500"
        variant="outline"
        size="sm"
        placeholder="type the word"
      />
      <Input
        borderRadius={4}
        isRequired
        focusBorderColor="primary.500"
        variant="outline"
        size="sm"
        placeholder="type the translation"
        mt={4}
      />
      <Textarea
        resize="none"
        borderRadius={4}
        focusBorderColor="primary.500"
        variant="outline"
        size="sm"
        placeholder="type a note"
        mt={4}
      />

      <ButtonGroup display="flex" alignItems="center" justifyContent="flex-end" mt={4}>
        <Button colorScheme="red" size="sm">
          Cancelar
        </Button>

        <Button colorScheme="green" size="sm">
          Salvar
        </Button>
      </ButtonGroup>
    </Box>
  )
}
