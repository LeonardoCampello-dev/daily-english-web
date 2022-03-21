import { Center, Spinner } from '@chakra-ui/react'

export const CentralizedLoader = () => {
  return (
    <Center mt={48}>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="primary.500"
        size="xl"
        display="block"
      />
    </Center>
  )
}
