import { Word } from 'domain/entities'

import { useDailyEnglishAPI } from 'services/useDailyEnglishAPI'
import { WordCreateAndUpdateRequestDTO } from 'services/api/daily-english-api/word/interfaces'
import { EndpointEnum } from 'types/enums'

export const useDailyEnglishWordAPI = () => {
  const endpoint = EndpointEnum.WORDS

  const { get, getOneById, create, update, deleteOneById } = useDailyEnglishAPI(endpoint)

  return {
    endpoint,
    get: () => get<Word>(),
    getOneById: (id: string) => getOneById<Word>(id),
    create: (data: WordCreateAndUpdateRequestDTO) =>
      create<WordCreateAndUpdateRequestDTO, Word>(data),
    update: (id: string, data: WordCreateAndUpdateRequestDTO) =>
      update<WordCreateAndUpdateRequestDTO, Word>(id, data),
    deleteOneById: (id: string) => deleteOneById<Word>(id)
  }
}
