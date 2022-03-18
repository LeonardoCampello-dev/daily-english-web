import { FormControlProps, FormErrorMessageProps, FormLabelProps } from '@chakra-ui/react'
import { ReactChildren } from 'react'

export type BaseFormControlProps = {
  field: ReactChildren | JSX.Element
  label?: string
  labelHtmlFor?: string
  errorMessage?: string
  formLabelProps?: FormLabelProps
  formErrorMessageProps?: FormErrorMessageProps
} & FormControlProps
