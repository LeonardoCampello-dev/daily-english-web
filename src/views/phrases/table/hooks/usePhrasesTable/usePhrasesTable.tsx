import { Text } from '@chakra-ui/react'
import { useCallback, useMemo } from 'react'

import { TableRowProps } from 'modules/layout/table/components/table-row/types'
import { BaseBadge, NoteModal } from 'modules/presentational'
import { EditPhrase } from 'views/phrases/edit'
import { DeletePhrase } from 'views/phrases/delete'
import { useGetPhrases } from 'services/api/daily-english-api/queries'
import { formatDate } from 'utils/formatters'

export const usePhrasesTable = () => {
  const columns = useMemo(() => ['Phrase', 'Translation', 'Tense', 'Note', 'Last update'], [])

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
    data.items.forEach(item => {
      if (!item.deleted) {
        const columns = [
          <Text fontWeight="bold">{item.phrase}</Text>,
          item.translation,
          item.tense && (
            <BaseBadge colorScheme="telegram" fontSize="x-small">
              {item.tense}
            </BaseBadge>
          ),
          <NoteModal hasNote={Boolean(item.note)}>
            <Text mb={8}>{item.note}</Text>
          </NoteModal>,
          item.updatedAt ? formatDate(item.updatedAt) : formatDate(item.createdAt)
        ]

        rows.push({ columns, actions: makeActions(item.id) })
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
