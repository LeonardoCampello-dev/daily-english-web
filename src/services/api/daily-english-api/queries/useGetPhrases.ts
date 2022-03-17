import { useCallback, useMemo } from 'react'
import { useQuery, UseQueryResult } from 'react-query'

import { Phrase } from '../../../../domain/entities'
import { GetAllRequestResponse } from '../interfaces/get-all-request-response'
import { useDailyEnglishPhraseAPI } from '../phrase/useDailyEnglishPhraseAPI'

export const useGetPhrases = (): UseQueryResult<GetAllRequestResponse<Phrase>> => {
  const { endpoint, get } = useDailyEnglishPhraseAPI()

  const queryKey = useMemo(() => [endpoint], [endpoint])
  const queryFn = useCallback(() => get(), [get])

  return useQuery<GetAllRequestResponse<Phrase>, Error>(queryKey, queryFn)
}
