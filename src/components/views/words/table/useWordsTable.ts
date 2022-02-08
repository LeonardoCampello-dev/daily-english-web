import { useMemo } from 'react';

import { useGetWords } from '../../../../services/api/daily-english-api/queries/useGetWords';

export const useWordsTable = () => {
  const columns = useMemo(() => ['Word', 'Translation', 'Note', 'Last update'], []);

  const { data, isLoading, isFetching, isError } = useGetWords();

  return {
    columns,
    isError,
    isFetching,
    isLoading,
    data
  };
};
