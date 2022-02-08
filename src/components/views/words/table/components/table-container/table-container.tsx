import { Box } from '@chakra-ui/react';
import { ComponentType } from 'react';

export const TableContainer: ComponentType = ({ children }) => {
  return (
    <Box overflowX='auto' width='90%' mx='auto' mt={8}>
      {children}
    </Box>
  );
};
