import { Center, Heading } from '@chakra-ui/react'
import { ComponentType, memo } from 'react'

import { Link } from 'react-router-dom'

const DailyEnglishIconComponent: ComponentType = () => {
  return (
    <Link to="/">
      <Center display="flex" alignItems="center" mt={8}>
        <Heading color="primary.500" mr={2}>
          Daily
        </Heading>
        <Heading>English</Heading>
        <Heading color="primary.500">.</Heading>
      </Center>
    </Link>
  )
}

export const DailyEnglishIcon = memo(DailyEnglishIconComponent)
