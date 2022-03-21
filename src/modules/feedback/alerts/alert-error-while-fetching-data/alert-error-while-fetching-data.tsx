import { Button, Center } from '@chakra-ui/react'

import { BaseAlert } from '..'
import { useReloadPage } from 'hooks/useReloadPage'

export const AlertErrorWhileFetchingData = () => {
  const { handleReloadPage } = useReloadPage()

  return (
    <Center mt={8} px={4}>
      <BaseAlert
        title="There was an error while fetching the data"
        description={
          <Button variant="ghost" textDecoration="underline" mt={2} onClick={handleReloadPage}>
            Click here to reload the page
          </Button>
        }
        status="error"
        hideCloseButton
        renderInColumns
      />
    </Center>
  )
}
