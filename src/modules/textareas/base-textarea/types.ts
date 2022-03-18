import { TextareaProps } from '@chakra-ui/react'
import { UseControllerReturn } from 'react-hook-form'

export type BaseTextareaProps = {
  controller: UseControllerReturn<any, any>
} & TextareaProps
