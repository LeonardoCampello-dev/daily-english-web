import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'

export const wordCreateAndUpdateFormValidationSchema = joiResolver(
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
