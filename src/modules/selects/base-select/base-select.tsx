import { Select } from '@chakra-ui/react'

import { ComponentType } from 'react'
import { BaseSelectProps } from './types'

export const BaseSelect: ComponentType<BaseSelectProps> = ({ controller, options, ...props }) => {
  return (
    <Select
      id={props.id}
      {...props}
      {...controller.field}
      height={props.height || '36px'}
      borderRadius={props.borderRadius || 4}
      focusBorderColor={props.focusBorderColor || 'primary.500'}
      variant={props.variant || 'outline'}
      size={props.size || 'sm'}
      placeholder={props.placeholder}
    >
      {options.map(({ label, value }) => {
        return <option value={value}>{label}</option>
      })}
    </Select>
  )
}
