import { Button, Center, Flex, Heading } from '@chakra-ui/react'

import * as SadLookAnimation from 'assets/animations/sad-look.json'

import { useMemo } from 'react'
import Lottie, { Options as AnimationOptions } from 'react-lottie'
import { Link } from 'react-router-dom'

export const PageNotFound = () => {
  const animationOptions: AnimationOptions = useMemo(
    () => ({
      loop: true,
      autoplay: true,
      animationData: SadLookAnimation,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }),
    []
  )

  return (
    <Center mt="28">
      <Flex flexDirection="column" gap={8}>
        <Center>
          <Heading>Page not found</Heading>
        </Center>

        <Lottie options={animationOptions} height={128} width={128} />

        <Link to="/">
          <Button variant="link" color="primary.500">
            Click here to return to the home page
          </Button>
        </Link>
      </Flex>
    </Center>
  )
}
