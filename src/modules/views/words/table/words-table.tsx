import { Spinner, Center, Button } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'

import { ComponentType } from 'react'

import { EditWord } from '../edit/edit-word'
import { useReloadPage } from 'hooks/useReloadPage'
import { BaseAlert } from 'modules/feedback'
import { BaseButton } from 'modules/buttons'
import { Table } from 'modules/layout'
import { EditModal } from 'modules/presentational'
import { useWordsTable } from './useWordsTable'

export const WordsTable: ComponentType = () => {
  const { columns, isError, isFetching, isLoading, data, rows } = useWordsTable()

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
          title="Add new word"
          onOpenButton={
            <BaseButton backgroundColor="primary.500" color="white" mb={2} leftIcon={<AddIcon />}>
              Add new word
            </BaseButton>
          }
        >
          <EditWord />
        </EditModal>
      }
    />
  )
}
