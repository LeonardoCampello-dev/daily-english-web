import { Text, Spinner, Center } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'

import { ComponentType } from 'react'

import { BaseButton } from '../../../buttons'
import { EditWord } from '../edit/edit-word'
import { Table } from '../../../layout/table/table'
import { EditModal } from '../../../layout/table/components/table-row/actions/modals'
import { useWordsTable } from './useWordsTable'

export const WordsTable: ComponentType = () => {
  const { columns, data, isError, isFetching, isLoading, rows } = useWordsTable()

  if (isError) {
    return (
      <Center mt={8}>
        <Text color="red.400">Ocorreu algum erro</Text>
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
