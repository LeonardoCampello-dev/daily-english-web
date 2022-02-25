import {
  Box,
  Input,
  Textarea,
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Skeleton,
  Stack
} from '@chakra-ui/react'

import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'

import { ComponentType, useEffect } from 'react'
import { useController, useForm } from 'react-hook-form'

import {
  useIsSavingWord,
  useSaveWord
} from '../../../../services/api/daily-english-api/mutations/useSaveWord'

import { useGetWordById } from '../../../../services/api/daily-english-api/queries/useGetWordById'
import { WordCreateAndUpdateRequestDTO } from '../../../../services/api/daily-english-api/word/interfaces/dto/word-create-and-update-request'

export const EditWord: ComponentType<EditWordProps> = ({ id }) => {
  const { data, isLoading, isFetching } = useGetWordById(id)

  const { mutateAsync: saveWord } = useSaveWord(id)
  const isSaving = useIsSavingWord(id)

  const { handleSubmit, formState, control, setValue } = useForm<WordCreateAndUpdateRequestDTO>({
    resolver: joiResolver(
      Joi.object({
        word: Joi.string()
          .required()
          .messages({ 'string.empty': 'Required field', 'any.required': 'Required field' }),
        translation: Joi.string()
          .required()
          .messages({ 'string.empty': 'Required field', 'any.required': 'Required field' }),
        note: Joi.string().allow('', null)
      })
    )
  })

  const word = useController<WordCreateAndUpdateRequestDTO, 'word'>({
    name: 'word',
    control,
    defaultValue: ''
  })

  const translation = useController<WordCreateAndUpdateRequestDTO, 'translation'>({
    name: 'translation',
    control,
    defaultValue: ''
  })

  const note = useController<WordCreateAndUpdateRequestDTO, 'note'>({
    name: 'note',
    control,
    defaultValue: ''
  })

  const onSubmit = (data: WordCreateAndUpdateRequestDTO) => {
    saveWord(data)
  }

  useEffect(() => {
    if (data) {
      setValue('word', data.word)
      setValue('translation', data.translation)
      setValue('note', data.note)
    }
  }, [data, setValue])

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

          <Input
            id="word"
            {...word.field}
            height="36px"
            borderRadius={4}
            focusBorderColor="primary.500"
            variant="outline"
            size="sm"
            placeholder="type the word"
          />

          <FormErrorMessage>{formState.errors.word?.message}</FormErrorMessage>
        </FormControl>

        <FormControl mt={4} isInvalid={Boolean(formState.errors.translation?.message)}>
          <FormLabel htmlFor="translation">Translation</FormLabel>

          <Input
            id="translation"
            {...translation.field}
            height="36px"
            borderRadius={4}
            focusBorderColor="primary.500"
            variant="outline"
            size="sm"
            placeholder="type the translation"
          />

          <FormErrorMessage>{formState.errors.translation?.message}</FormErrorMessage>
        </FormControl>

        <FormControl mt={4}>
          <FormLabel htmlFor="note">Note</FormLabel>

          <Textarea
            id="note"
            {...note.field}
            height="72px"
            resize="none"
            borderRadius={4}
            focusBorderColor="primary.500"
            variant="outline"
            size="sm"
            placeholder="type a note"
          />
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
