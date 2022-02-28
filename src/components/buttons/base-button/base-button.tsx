import { Button, ButtonProps } from '@chakra-ui/react'
import { ComponentType } from 'react'

export enum BaseButtonColorsEnum {
  ERROR = 'red',
  SUCCESS = 'green'
}

export const BaseButton: ComponentType<BaseButtonProps> = ({ children, ...props }) => {
  return (
    <Button {...props} colorScheme={props.color} size={props.size || 'sm'}>
      {children}
    </Button>
  )
}

type BaseButtonProps = {
  color?: BaseButtonColorsEnum
} & Omit<ButtonProps, 'colorScheme'>
