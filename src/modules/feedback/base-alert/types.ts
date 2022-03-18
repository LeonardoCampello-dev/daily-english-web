import { AlertProps as ChakraAlertProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

export type AlertProps = {
  title: string
  description?: string | JSX.Element | ReactNode | (string | JSX.Element | ReactNode)[]
  hideIcon?: boolean
  hideCloseButton?: boolean
  renderInColumns?: boolean
} & Pick<ChakraAlertProps, 'variant' | 'status'>
