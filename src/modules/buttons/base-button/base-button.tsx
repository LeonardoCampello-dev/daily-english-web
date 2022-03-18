import { Button } from '@chakra-ui/react'
import { ComponentType } from 'react'
import { BaseButtonProps } from './types'

export const BaseButton: ComponentType<BaseButtonProps> = ({ children, ...props }) => {
  return (
    <Button {...props} colorScheme={props.colorScheme} size={props.size || 'sm'}>
      {children}
    </Button>
  )
}
