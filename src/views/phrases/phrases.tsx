import { Box, Center } from '@chakra-ui/react'
import { ComponentType } from 'react'

import { DailyEnglishIcon } from 'modules/presentational'
import { PhrasesTable } from './table/phrases-table'

export const Phrases: ComponentType = () => {
  return (
    <Box>
      <Center>
        <DailyEnglishIcon />
      </Center>

      <PhrasesTable />
    </Box>
  )
}
