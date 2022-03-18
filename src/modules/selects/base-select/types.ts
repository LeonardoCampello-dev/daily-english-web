import { SelectProps } from '@chakra-ui/react'

import { UseControllerReturn } from 'react-hook-form'

export type BaseSelectProps = {
  controller: UseControllerReturn<any, any>
  options: Array<{ label: string; value: string }>
} & SelectProps
