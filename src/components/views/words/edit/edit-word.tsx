import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Skeleton,
  Stack
} from '@chakra-ui/react'

import { ComponentType } from 'react'

import { BaseInput } from '../../../inputs'
import { BaseTextarea } from '../../../inputs/textareas'

import { useEditWord } from './useEditWord'

export const EditWord: ComponentType<EditWordProps> = ({ id }) => {
  const { controllers, formState, isLoading, isFetching, isSaving, onSubmit, handleSubmit } =
    useEditWord({ id })

  if (isLoading || isFetching || isSaving) {
    return (
      <Stack px={4} py={4}>
        <Skeleton height="36px" />
        <Skeleton height="36px" mt={4} />
        <Skeleton height="72px" mt={4} />
      </Stack>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box px={4} py={4}>
        <FormControl isInvalid={Boolean(formState.errors.word?.message)}>
          <FormLabel htmlFor="word">Word</FormLabel>

          <BaseInput id="word" controller={controllers.word} placeholder="type the word" />

          <FormErrorMessage>{formState.errors.word?.message}</FormErrorMessage>
        </FormControl>

        <FormControl mt={4} isInvalid={Boolean(formState.errors.translation?.message)}>
          <FormLabel htmlFor="translation">Translation</FormLabel>

          <BaseInput
            id="translation"
            controller={controllers.translation}
            placeholder="type the translation"
          />

          <FormErrorMessage>{formState.errors.translation?.message}</FormErrorMessage>
        </FormControl>

        <FormControl mt={4}>
          <FormLabel htmlFor="note">Note</FormLabel>

          <BaseTextarea id="note" controller={controllers.note} placeholder="type a note" />
        </FormControl>

        <ButtonGroup display="flex" alignItems="center" justifyContent="flex-end" mt={4}>
          <Button colorScheme="red" size="sm">
            Cancelar
          </Button>

          <Button colorScheme="green" size="sm" type="submit" isLoading={isSaving}>
            Salvar
          </Button>
        </ButtonGroup>
      </Box>
    </form>
  )
}

type EditWordProps = {
  id: string
}
