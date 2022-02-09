import { useCallback, useMemo } from 'react'
import { useQuery, UseQueryResult } from 'react-query'

import { Word } from '../../../../domain/entities'
import { GetAllRequestResponse } from '../interfaces/get-all-request-response'
import { useDailyEnglishWordAPI } from '../word/useDailyEnglishWordAPI'

export const useGetWords = (): UseQueryResult<GetAllRequestResponse<Word>> => {
  const { endpoint, get } = useDailyEnglishWordAPI()

  const queryKey = useMemo(() => [endpoint], [endpoint])
  const queryFn = useCallback(() => get(), [get])

  return useQuery<GetAllRequestResponse<Word>, Error>(queryKey, queryFn)
}
