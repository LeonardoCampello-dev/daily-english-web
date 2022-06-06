import { useCallback, useMemo } from 'react'
import { useQuery, UseQueryResult } from 'react-query'

import { Article } from 'domain/entities'
import { GetAllRequestResponse } from 'services/api/daily-english-api/interfaces'
import { useDailyEnglishArticleAPI } from '../../article/useDailyEnglishArticleAPI'

export const useGetArticles = (): UseQueryResult<GetAllRequestResponse<Article>> => {
  const { endpoint, get } = useDailyEnglishArticleAPI()

  const queryKey = useMemo(() => [endpoint], [endpoint])
  const queryFn = useCallback(() => get(), [get])

  return useQuery<GetAllRequestResponse<Article>, Error>(queryKey, queryFn)
}
