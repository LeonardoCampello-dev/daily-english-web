import { useCallback, useMemo } from 'react'
import { useQuery, UseQueryResult } from 'react-query'

import { Word } from '../../../../../domain/entities'
import { useDailyEnglishWordAPI } from '../../word/useDailyEnglishWordAPI'

export const useGetWordById = (id = ''): UseQueryResult<Word> => {
  const { endpoint, getOneById } = useDailyEnglishWordAPI()

  const queryKey = useMemo(() => [endpoint, id], [endpoint, id])
  const queryFn = useCallback(() => getOneById(id), [id, getOneById])

  return useQuery<Word, Error>(queryKey, queryFn)
}
