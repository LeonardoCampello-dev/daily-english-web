import { Button, ButtonProps } from '@chakra-ui/react'
import { ComponentType } from 'react'

export enum BaseButtonColorsEnum {
  ERROR = 'red',
  SUCCESS = 'green'
}

export const BaseButton: ComponentType<BaseButtonProps> = ({ children, ...props }) => {
  return (
    <Button {...props} colorScheme={props.colorScheme} size={props.size || 'sm'}>
      {children}
    </Button>
  )
}

type BaseButtonProps = {
  colorScheme?: BaseButtonColorsEnum
} & Omit<ButtonProps, 'colorScheme'>
