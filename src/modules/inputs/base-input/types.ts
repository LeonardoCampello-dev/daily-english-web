import { InputProps } from '@chakra-ui/react'
import { UseControllerReturn } from 'react-hook-form'

export type BaseInputProps = {
  controller: UseControllerReturn<any, any>
} & InputProps
