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

import { ComponentType } from 'react'
import { useForm } from 'react-hook-form'
import { useGetWordById } from '../../../../services/api/daily-english-api/queries/useGetWordById'
import { WordCreateAndUpdateRequest } from '../../../../services/api/daily-english-api/word/interfaces/word-create-and-update-request'

export const EditWord: ComponentType<EditWordProps> = ({ id }) => {
  const { data, isLoading, isFetching } = useGetWordById(id)

  const { register, handleSubmit, formState } = useForm<WordCreateAndUpdateRequest>({
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
    ),
    defaultValues: {
      word: data?.word || '',
      translation: data?.translation || '',
      note: data?.note || ''
    }
  })

  const onSubmit = (data: object) => console.log(data)

  if (isLoading || isFetching) {
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
            {...register('word')}
            id="word"
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
            {...register('translation')}
            id="translation"
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
            {...register('note')}
            id="note"
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

          <Button colorScheme="green" size="sm" type="submit">
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
