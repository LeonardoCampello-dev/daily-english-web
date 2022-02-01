import { Center, Heading } from '@chakra-ui/react';
import { ComponentType, memo } from 'react';

const DailyEnglishIconComponent: ComponentType = () => {
  return (
    <Center display='flex' alignItems='center' mt={8}>
      <Heading color='primary.500' mr={2}>
        Daily
      </Heading>
      <Heading>English</Heading>
      <Heading color='primary.500'>.</Heading>
    </Center>
  );
};

export const DailyEnglishIcon = memo(DailyEnglishIconComponent);
