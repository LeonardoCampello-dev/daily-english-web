import { Box, ChakraProvider, Heading } from '@chakra-ui/react';
import { QueryClientProvider } from 'react-query';

import { theme } from './theme/theme';
import { queryClient } from './config/query-client';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Box>
          <Heading color='gray.500'>Daily English</Heading>
        </Box>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
