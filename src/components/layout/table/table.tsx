import { Tbody, Table as ChakraTable } from '@chakra-ui/react'

import { ComponentType, ReactNode } from 'react'

import { TableContainer, TableHeader, TableRow, TableRowProps, TableTotalItems } from './components'

export const Table: ComponentType<TableProps> = ({
  columns,
  rows,
  rowsCount = 0,
  hasActions,
  componentBeforeTable = null
}) => {
  return (
    <TableContainer>
      {componentBeforeTable}
      <ChakraTable>
        <TableHeader columns={columns} hasActions={Boolean(hasActions)} />

        <Tbody>
          {rows?.map((row, index) => {
            return <TableRow key={index} columns={row.columns} actions={row.actions} />
          })}
        </Tbody>
      </ChakraTable>

      <TableTotalItems count={rowsCount} />
    </TableContainer>
  )
}

type TableProps = {
  columns: (string | JSX.Element | ReactNode)[]
  rows: TableRowProps[]
  hasActions?: boolean
  componentBeforeTable?: JSX.Element | ReactNode
  rowsCount?: number
}