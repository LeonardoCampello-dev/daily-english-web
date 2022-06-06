import { Article } from 'domain/entities'
import { useDailyEnglishAPI } from 'services/useDailyEnglishAPI'
import { EndpointEnum } from 'types/enums'

export const useDailyEnglishArticleAPI = () => {
  const endpoint = EndpointEnum.ARTICLES

  const { get } = useDailyEnglishAPI(endpoint)

  return {
    endpoint,
    get: () => get<Article>()
  }
}
