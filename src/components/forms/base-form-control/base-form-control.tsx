import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormErrorMessageProps,
  FormLabel,
  FormLabelProps
} from '@chakra-ui/react'

import { ReactChildren } from 'react'

export const BaseFormControl = ({
  labelHtmlFor,
  label,
  errorMessage,
  formLabelProps,
  formErrorMessageProps,
  field,
  ...props
}: BaseFormControlProps) => {
  return (
    <FormControl {...props} isInvalid={props.isInvalid}>
      {label && (
        <FormLabel {...formLabelProps} htmlFor={labelHtmlFor}>
          {label}
        </FormLabel>
      )}

      {field}

      <FormErrorMessage {...formErrorMessageProps}>{errorMessage}</FormErrorMessage>
    </FormControl>
  )
}

type BaseFormControlProps = {
  field: ReactChildren | JSX.Element
  label?: string
  labelHtmlFor?: string
  errorMessage?: string
  formLabelProps?: FormLabelProps
  formErrorMessageProps?: FormErrorMessageProps
} & FormControlProps
