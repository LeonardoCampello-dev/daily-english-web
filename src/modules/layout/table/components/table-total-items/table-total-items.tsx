import { Tag } from '@chakra-ui/react'

import { ComponentType, memo } from 'react'
import { TableTotalItemsProps } from './types'

const TableTotalItemsComponent: ComponentType<TableTotalItemsProps> = ({ count }) => {
  return (
    <Tag mt={6} size="md" backgroundColor="secondary.500" color="white">
      Total items: {count}
    </Tag>
  )
}

export const TableTotalItems = memo(TableTotalItemsComponent, (previousProps, nextProps) => {
  return previousProps.count === nextProps.count
})
