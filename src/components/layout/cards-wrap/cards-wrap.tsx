import { Center } from '@chakra-ui/react';
import { ComponentType } from 'react';

export const CardsWrap: ComponentType = ({ children }) => {
  return (
    <Center mt={8} display='flex' flexDirection='column'>
      {children}
    </Center>
  );
};
