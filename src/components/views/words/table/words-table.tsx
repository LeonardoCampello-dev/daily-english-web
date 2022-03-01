import { AddIcon } from '@chakra-ui/icons'
import { Table, Tbody, Text, Spinner, Center } from '@chakra-ui/react'

import { ComponentType } from 'react'

import { TableContainer, TableHeader, TableRow } from './components'
import { EditModal } from './components/table-row/actions/modals'
import { BaseButton } from '../../../buttons'
import { DeleteWord } from '../delete/delete-word'
import { EditWord } from '../edit/edit-word'
import { NoteModal } from '../modals/note-modal/note-modal'
import { formatDate } from '../../../../utils/formatters/format-date'
import { useWordsTable } from './useWordsTable'

export const WordsTable: ComponentType = () => {
  const { columns, isError, isFetching, isLoading, data } = useWordsTable()

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

  const makeActions = (id: string) => {
    return {
      edit: {
        title: 'Edit note',
        content: <EditWord id={id} />
      },
      delete: {
        title: 'Delete note',
        content: <DeleteWord />
      }
    }
  }

  return (
    <TableContainer>
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

      <Table variant="simple" size="sm" p={2} colorScheme="orange">
        <TableHeader columns={columns} hasActions />

        <Tbody>
          {data?.items.map(({ id, word, translation, createdAt, updatedAt, note }) => {
            const columns = [
              <Text fontWeight="bold">{word}</Text>,
              translation,

              <NoteModal>
                <Text mb={8}>{note}</Text>
              </NoteModal>,
              updatedAt ? formatDate(updatedAt) : formatDate(createdAt)
            ]

            return <TableRow key={id} columns={columns} actions={makeActions(id)} />
          })}
        </Tbody>
      </Table>
    </TableContainer>
  )
}
