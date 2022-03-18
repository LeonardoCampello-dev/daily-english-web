import { Center, Text } from '@chakra-ui/react'
import { ComponentType, memo } from 'react'

const HomePageDescriptionComponent: ComponentType = () => {
  return (
    <Center mt={8} color="gray.200" display="flex" flexDirection="column">
      <Text>Save new things about English daily.</Text>

      <Text>So choose one for your start!</Text>
    </Center>
  )
}

export const HomePageDescription = memo(HomePageDescriptionComponent)
