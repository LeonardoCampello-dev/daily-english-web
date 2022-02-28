import { joiResolver } from '@hookform/resolvers/joi'

import Joi from 'joi'

import { useController, useForm } from 'react-hook-form'
import { WordCreateAndUpdateRequestDTO } from '../../../../services/api/daily-english-api/word/interfaces/dto/word-create-and-update-request'

export const useEditWordForm = () => {
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

  const useEditWordFormControllers = () => {
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

    return { word, translation, note }
  }

  return {
    controllers: useEditWordFormControllers(),
    formState,
    handleSubmit,
    setValue
  }
}
