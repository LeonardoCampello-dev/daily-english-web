import { Spinner, Center, Button } from '@chakra-ui/react'

import { ComponentType } from 'react'

import { Alert } from '../../../feedback/alert/alert'
import { useReloadPage } from '../../../../hooks/useReloadPage'
import { Table } from '../../../layout/table/table'
import { usePhrasesTable } from './usePhrasesTable'

export const PhrasesTable: ComponentType = () => {
  const { columns, isError, isFetching, isLoading, data, rows } = usePhrasesTable()

  const { handleReloadPage } = useReloadPage()

  if (isError) {
    return (
      <Center mt={8} px={4}>
        <Alert
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

  if (isLoading || isFetching) {
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

  return <Table columns={columns} rows={rows} rowsCount={data?.items.length} hasActions />
}
