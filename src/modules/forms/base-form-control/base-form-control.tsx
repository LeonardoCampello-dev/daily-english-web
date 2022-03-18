import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react'
import { BaseFormControlProps } from './types'

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
