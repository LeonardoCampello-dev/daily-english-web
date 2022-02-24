import {
  Box,
  Input,
  Textarea,
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  FormErrorMessage
} from '@chakra-ui/react'

import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'

import { ComponentType } from 'react'
import { useForm } from 'react-hook-form'
import { WordCreateAndUpdateRequest } from '../../../../services/api/daily-english-api/word/interfaces/word-create-and-update-request'

export const EditWord: ComponentType = () => {
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
    )
  })

  const onSubmit = (data: object) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box px={4} py={4}>
        <FormControl isInvalid={Boolean(formState.errors.word?.message)}>
          <FormLabel htmlFor="word">Word</FormLabel>

          <Input
            {...register('word')}
            id="word"
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
