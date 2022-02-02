import { useCallback, useMemo } from 'react';
import { useQuery } from 'react-query';

import { Word } from '../../../../domain/entities';
import { useDailyEnglishWordAPI } from '../word/useDailyEnglishWordAPI';

export const useGetWords = async () => {
  const { endpoint, get } = useDailyEnglishWordAPI();

  const queryKey = useMemo(() => [endpoint], [endpoint]);
  const queryFunction = useCallback(async () => get(), [get]);

  const query = useQuery<Word[], Error>(queryKey, queryFunction);

  return query;
};
