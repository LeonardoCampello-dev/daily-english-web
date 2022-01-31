import { Box, ChakraProvider, Heading, Text } from '@chakra-ui/react';

import { theme } from './theme/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Heading color='cyan.100'>Chakra UI</Heading>

        <Text>HEHEHE</Text>
      </Box>
    </ChakraProvider>
  );
}

export default App;
