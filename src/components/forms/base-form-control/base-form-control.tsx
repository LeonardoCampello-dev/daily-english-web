import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormErrorMessageProps,
  FormLabel,
  FormLabelProps
} from '@chakra-ui/react'

import { ReactChildren } from 'react'

export const BaseFormControl = ({ ...props }: BaseFormControlProps) => {
  return (
    <FormControl {...props} isInvalid={props.isInvalid}>
      {props.label && (
        <FormLabel {...props.formLabelProps} htmlFor={props.labelHtmlFor}>
          {props.label}
        </FormLabel>
      )}

      {props.field}

      <FormErrorMessage {...props.formErrorMessageProps}>{props.errorMessage}</FormErrorMessage>
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
