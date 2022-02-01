import { Box, Flex, Heading, Tag, Image } from '@chakra-ui/react';
import { ComponentType } from 'react';
import { Query } from 'react-query';

export const Card: ComponentType<CardProps> = ({ title, imagePath }) => {
  return (
    <Flex
      justifyContent='space-between'
      alignItems='center'
      backgroundColor='gray.50'
      minWidth={300}
      px={10}
      py={4}
      borderRadius={8}
    >
      <Box>
        <Heading as='h2' size='lg' mb='4px'>
          {title}
        </Heading>

        <Tag size='sm' backgroundColor='secondary.500' color='white'>
          320 items
        </Tag>
      </Box>

      <Box>
        <Image boxSize={16} objectFit='cover' src={imagePath} />
      </Box>
    </Flex>
  );
};

type CardProps = {
  title: string;
  imagePath: string;
  query?: Query;
};
