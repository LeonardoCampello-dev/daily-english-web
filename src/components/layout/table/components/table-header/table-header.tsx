import { Th, Thead, Tr } from '@chakra-ui/react'

import { ComponentType, ReactNode } from 'react'

export const TableHeader: ComponentType<TableHeaderProps> = ({ columns, hasActions = false }) => {
  return (
    <Thead>
      <Tr>
        {columns.map(column => (
          <Th key={String(column)} px={2} textAlign="center">
            {column}
          </Th>
        ))}

        {hasActions && <Th>Actions</Th>}
      </Tr>
    </Thead>
  )
}

export type TableHeaderProps = {
  columns: (string | JSX.Element | ReactNode)[]
  hasActions: boolean
}
