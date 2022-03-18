import { useCallback, useMemo } from 'react'
import { useQuery, UseQueryResult } from 'react-query'

import { Phrase } from 'domain/entities'
import { useDailyEnglishPhraseAPI } from 'services/api/daily-english-api/phrase/useDailyEnglishPhraseAPI'

export const useGetPhraseById = (id = ''): UseQueryResult<Phrase> => {
  const { endpoint, getOneById } = useDailyEnglishPhraseAPI()

  const queryKey = useMemo(() => [endpoint, id], [endpoint, id])
  const queryFn = useCallback(() => getOneById(id), [id, getOneById])

  return useQuery<Phrase, Error>(queryKey, queryFn)
}
