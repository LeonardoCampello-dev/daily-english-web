import { AddIcon } from '@chakra-ui/icons'
import { Spinner, Center, Button } from '@chakra-ui/react'

import { ComponentType } from 'react'

import { EditPhrase } from '../edit'
import { useReloadPage } from 'hooks/useReloadPage'
import { BaseAlert } from 'modules/feedback'
import { Table } from 'modules/layout'
import { EditModal } from 'modules/presentational'
import { BaseButton } from 'modules/buttons'
import { usePhrasesTable } from './usePhrasesTable'

export const PhrasesTable: ComponentType = () => {
  const { columns, isError, isFetching, isLoading, data, rows } = usePhrasesTable()

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

  return (
    <Table
      columns={columns}
      rows={rows}
      rowsCount={data?.items.length}
      hasActions
      componentBeforeTable={
        <EditModal
          title="Add new phrase"
          onOpenButton={
            <BaseButton backgroundColor="primary.500" color="white" mb={2} leftIcon={<AddIcon />}>
              Add new phrase
            </BaseButton>
          }
        >
          <EditPhrase />
        </EditModal>
      }
    />
  )
}
