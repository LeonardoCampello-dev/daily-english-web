import { Box, Center } from '@chakra-ui/react';
import { ComponentType } from 'react';

import { DailyEnglishIcon } from '../../presentational';
import { WordsTable } from './table/words-table';

export const Words: ComponentType = () => {
  return (
    <Box>
      <Center>
        <DailyEnglishIcon />
      </Center>

      <WordsTable />
    </Box>
  );
};
