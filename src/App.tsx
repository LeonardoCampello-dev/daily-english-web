import { ChakraProvider } from '@chakra-ui/react';

import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { queryClient } from './config/query-client';

import { DailyEnglishIcon } from './components/presentational';
import { CardsWrap, Card, HomePageDescription, MainWrap } from './components/layout';

import { theme } from './theme/theme';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} position='top-left' />

      <ChakraProvider theme={theme}>
        <MainWrap>
          <DailyEnglishIcon />

          <HomePageDescription />

          <CardsWrap>
            <Card title='Words' imagePath='https://i.ibb.co/k5mTmK0/board-game.png' />
          </CardsWrap>
        </MainWrap>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
