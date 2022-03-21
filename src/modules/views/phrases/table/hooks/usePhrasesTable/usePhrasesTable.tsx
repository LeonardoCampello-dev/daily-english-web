import { Text } from '@chakra-ui/react'
import { useCallback, useMemo } from 'react'

import { TableRowProps } from 'modules/layout/table/components/table-row/types'
import { NoteModal } from 'modules/presentational'
import { EditPhrase } from 'modules/views/phrases/edit'
import { DeletePhrase } from 'modules/views/phrases/delete'
import { useGetPhrases } from 'services/api/daily-english-api/queries'
import { formatDate } from 'utils/formatters'

export const usePhrasesTable = () => {
  const columns = useMemo(() => ['Phrase', 'Translation', 'Note', 'Last update'], [])

  const { data, isLoading, isFetching, isError } = useGetPhrases()

  const makeActions = useCallback((id: string) => {
    return {
      edit: {
        title: 'Edit phrase',
        content: <EditPhrase id={id} />
      },
      delete: {
        title: 'Delete phrase',
        content: <DeletePhrase id={id} />
      }
    }
  }, [])

  const rows: TableRowProps[] = []

  if (data?.items) {
    data.items.forEach(({ id, phrase, translation, createdAt, updatedAt, note, deleted }) => {
      if (!deleted) {
        const columns = [
          <Text fontWeight="bold">{phrase}</Text>,
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
