import { Textarea, TextareaProps } from '@chakra-ui/react'
import { ComponentType } from 'react'
import { UseControllerReturn } from 'react-hook-form'

export const BaseTextarea: ComponentType<BaseTextareaProps> = ({ controller, ...props }) => {
  return (
    <Textarea
      id={props.id}
      {...controller.field}
      height={props.height || '72px'}
      resize={props.resize || 'none'}
      borderRadius={props.borderRadius || 4}
      focusBorderColor={props.focusBorderColor || 'primary.500'}
      variant={props.variant || 'outline'}
      size={props.size || 'sm'}
      placeholder={props.placeholder}
    />
  )
}

type BaseTextareaProps = {
  controller: UseControllerReturn<any, any>
} & TextareaProps
