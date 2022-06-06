import { Text } from '@chakra-ui/react'
import { useCallback, useMemo } from 'react'

import { TableRowProps } from 'modules/layout/table/components/table-row/types'
import { NoteModal } from 'modules/presentational'
import { EditWord } from 'views/words/edit'
import { DeleteWord } from 'views/words/delete'
import { useGetWords } from 'services/api/daily-english-api/queries'
import { formatDate } from 'utils/formatters'

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
