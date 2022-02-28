import { Input, InputProps } from '@chakra-ui/react'

import { ComponentType } from 'react'
import { UseControllerReturn } from 'react-hook-form'

export const BaseInput: ComponentType<BaseInputProps> = ({ controller, ...props }) => {
  return (
    <Input
      id={props.id}
      {...props}
      {...controller.field}
      height={props.height || '36px'}
      borderRadius={props.borderRadius || 4}
      focusBorderColor={props.focusBorderColor || 'primary.500'}
      variant={props.variant || 'outline'}
      size={props.size || 'sm'}
      placeholder={props.placeholder}
    />
  )
}

type BaseInputProps = {
  controller: UseControllerReturn<any, any>
} & InputProps
