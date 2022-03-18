import { ButtonProps } from '@chakra-ui/react'

import { BaseButtonColorsEnum } from './enums'

export type BaseButtonProps = {
  colorScheme?: BaseButtonColorsEnum
} & Omit<ButtonProps, 'colorScheme'>
