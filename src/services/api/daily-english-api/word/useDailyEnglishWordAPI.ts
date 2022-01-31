import { Word } from '../../../../domain/entities';
import { WordCreateAndUpdateRequest } from './interfaces/word-create-and-update-request';

import { EndpointEnum } from '../../../../types/enums';
import { useDailyEnglishAPI } from '../../../useDailyEnglishAPI';

export const useDailyEnglishWordAPI = () => {
  const endpoint = EndpointEnum.WORDS;

  const { get, getOneById, create, update, deleteOneById } = useDailyEnglishAPI(endpoint);

  return {
    endpoint,
    get: () => get<Word[]>(),
    getOneById: (id: string) => getOneById<Word>(id),
    create: (data: WordCreateAndUpdateRequest) => create<WordCreateAndUpdateRequest, Word>(data),
    update: (id: string, data: WordCreateAndUpdateRequest) =>
      update<WordCreateAndUpdateRequest, Word>(id, data),
    deleteOneById: (id: string) => deleteOneById<Word>(id)
  };
};
