import { Text } from '@chakra-ui/react'
import { useCallback, useMemo } from 'react'

import { TableRowProps } from '../../../layout/table/components'
import { NoteModal } from '../../../presentational/modals'
import { useGetPhrases } from '../../../../services/api/daily-english-api/queries/useGetPhrases'
import { formatDate } from '../../../../utils/formatters/format-date'

export const usePhrasesTable = () => {
  const columns = useMemo(() => ['Phrase', 'Translation', 'Note', 'Last update'], [])

  const { data, isLoading, isFetching, isError } = useGetPhrases()

  const handleReloadPage = useCallback(() => {
    window.location.reload()
  }, [])

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
    handleReloadPage,
    isError,
    isFetching,
    isLoading,
    data,
    rows
  }
}
