import { Box, Center, ChakraProvider, Flex, Heading, Tag, Text, Image } from '@chakra-ui/react';

import { QueryClientProvider } from 'react-query';

import { theme } from './theme/theme';
import { queryClient } from './config/query-client';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Box>
          <Center display='flex' alignItems='center' mt={8}>
            <Heading color='primary.500' mr={2}>
              Daily
            </Heading>
            <Heading>English</Heading>
            <Heading color='primary.500'>.</Heading>
          </Center>

          <Center mt={8} color='gray.200'>
            <Text>Save new things about English daily.</Text>
          </Center>

          <Center color='gray.200'>
            <Text>So choose one for your start!</Text>
          </Center>

          <Center mt={16}>
            <Flex
              justifyContent='space-between'
              alignItems='center'
              backgroundColor='gray.50'
              minWidth={320}
              px={10}
              py={4}
              borderRadius={8}
            >
              <Box>
                <Heading as='h2' size='lg' mb='4px'>
                  Words
                </Heading>

                <Tag size='sm' backgroundColor='secondary.500' color='white'>
                  320 items
                </Tag>
              </Box>

              <Box>
                <Image
                  boxSize={16}
                  objectFit='cover'
                  src='https://i.ibb.co/k5mTmK0/board-game.png'
                />
              </Box>
            </Flex>
          </Center>
        </Box>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
