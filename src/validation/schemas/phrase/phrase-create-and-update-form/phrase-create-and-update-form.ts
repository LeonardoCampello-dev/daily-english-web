import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'

import { TenseEnum } from 'types'

export const phraseCreateAndUpdateFormValidationSchema = joiResolver(
  Joi.object({
    phrase: Joi.string()
      .required()
      .messages({ 'string.empty': 'Required field', 'any.required': 'Required field' }),
    translation: Joi.string()
      .required()
      .messages({ 'string.empty': 'Required field', 'any.required': 'Required field' }),
    note: Joi.string().allow('', null),
    tense: Joi.string()
      .valid(...Object.values(TenseEnum))
      .allow('', null)
      .messages({ 'any.only': 'Select a valid type of tense' })
  })
)
