import { Tbody, Table as ChakraTable, Center, Button, Spinner } from '@chakra-ui/react'
import { ComponentType, ReactNode } from 'react'

import { TableContainer, TableHeader, TableRow, TableTotalItems } from './components'
import { TableRowProps } from './components/table-row/types'
import { useReloadPage } from 'hooks/useReloadPage'
import { BaseAlert } from 'modules/feedback'

export const Table: ComponentType<TableProps> = ({
  columns,
  rows,
  rowsCount = 0,
  hasActions,
  componentBeforeTable = null,
  isError = false,
  isLoading = false
}) => {
  const { handleReloadPage } = useReloadPage()

  if (isError) {
    return (
      <Center mt={8} px={4}>
        <BaseAlert
          title="There was an error while fetching the data"
          description={
            <Button variant="ghost" textDecoration="underline" mt={2} onClick={handleReloadPage}>
              Click here to reload the page
            </Button>
          }
          status="error"
          hideCloseButton
          renderInColumns
        />
      </Center>
    )
  }

  if (isLoading) {
    return (
      <Center mt={48}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="primary.500"
          size="xl"
          display="block"
        />
      </Center>
    )
  }

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
  isError?: boolean
  isLoading?: boolean
}
