import { Phrase } from 'domain/entities'
import { PhraseCreateAndUpdateRequestDTO } from './interfaces'
import { useDailyEnglishAPI } from 'services/useDailyEnglishAPI'
import { EndpointEnum } from 'types/enums'

export const useDailyEnglishPhraseAPI = () => {
  const endpoint = EndpointEnum.PHRASES

  const { get, getOneById, create, update, deleteOneById } = useDailyEnglishAPI(endpoint)

  return {
    endpoint,
    get: () => get<Phrase>(),
    getOneById: (id: string) => getOneById<Phrase>(id),
    create: (data: PhraseCreateAndUpdateRequestDTO) =>
      create<PhraseCreateAndUpdateRequestDTO, Phrase>(data),
    update: (id: string, data: PhraseCreateAndUpdateRequestDTO) =>
      update<PhraseCreateAndUpdateRequestDTO, Phrase>(id, data),
    deleteOneById: (id: string) => deleteOneById<Phrase>(id)
  }
}
