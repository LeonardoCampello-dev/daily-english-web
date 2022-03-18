import { Text } from '@chakra-ui/react'
import { useCallback, useMemo } from 'react'

import { TableRowProps } from 'modules/layout/table/components/table-row/types'
import { NoteModal } from 'modules/presentational'
import { useGetPhrases } from 'services/api/daily-english-api/queries'
import { formatDate } from 'utils/formatters'

export const usePhrasesTable = () => {
  const columns = useMemo(() => ['Phrase', 'Translation', 'Note', 'Last update'], [])

  const { data, isLoading, isFetching, isError } = useGetPhrases()

  const makeActions = useCallback(() => {
    return {
      edit: {
        title: 'Edit word',
        content: <Text>Edit Word</Text>
      },
      delete: {
        title: 'Delete word',
        content: <Text>Delete Word</Text>
      }
    }
  }, [])

  const rows: TableRowProps[] = []

  if (data?.items) {
    data.items.forEach(({ phrase, translation, createdAt, updatedAt, note, deleted }) => {
      if (!deleted) {
        const columns = [
          <Text fontWeight="bold">{phrase}</Text>,
          translation,
          <NoteModal hasNote={Boolean(note)}>
            <Text mb={8}>{note}</Text>
          </NoteModal>,
          updatedAt ? formatDate(updatedAt) : formatDate(createdAt)
        ]

        rows.push({ columns, actions: makeActions() })
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
