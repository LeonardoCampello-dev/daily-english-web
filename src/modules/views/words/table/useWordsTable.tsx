import { Text } from '@chakra-ui/react'
import { useCallback, useMemo } from 'react'

import { DeleteWord } from '../delete/delete-word'
import { EditWord } from '../edit/edit-word'
import { TableRowProps } from '../../../layout/table/components/table-row/types'
import { NoteModal } from '../../../presentational/modals'
import { useGetWords } from '../../../../services/api/daily-english-api/queries/useGetWords'
import { formatDate } from '../../../../utils/formatters/format-date/format-date'

export const useWordsTable = () => {
  const columns = useMemo(() => ['Word', 'Translation', 'Note', 'Last update'], [])

  const { data, isLoading, isFetching, isError } = useGetWords()

  const makeActions = useCallback((id: string) => {
    return {
      edit: {
        title: 'Edit word',
        content: <EditWord id={id} />
      },
      delete: {
        title: 'Delete word',
        content: <DeleteWord id={id} />
      }
    }
  }, [])

  const rows: TableRowProps[] = []

  if (data?.items) {
    data.items.forEach(({ id, word, translation, createdAt, updatedAt, note, deleted }) => {
      if (!deleted) {
        const columns = [
          <Text fontWeight="bold">{word}</Text>,
          translation,
          <NoteModal hasNote={Boolean(note)}>
            <Text mb={8}>{note}</Text>
          </NoteModal>,
          updatedAt ? formatDate(updatedAt) : formatDate(createdAt)
        ]

        rows.push({ columns, actions: makeActions(id) })
      }
    })
  }

  return {
    columns,
    isError,
    isFetching,
    isLoading,
    data,
    rows
  }
}
