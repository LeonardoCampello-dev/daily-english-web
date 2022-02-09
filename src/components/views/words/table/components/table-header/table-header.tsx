import { Th, Thead, Tr } from '@chakra-ui/react'
import { ComponentType } from 'react'

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

type TableHeaderProps = {
  columns: (string | JSX.Element)[]
  hasActions: boolean
}
