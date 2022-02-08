import { Table, Tbody, Text, Spinner, Center, Button } from '@chakra-ui/react';

import { ComponentType } from 'react';

import { formatDate } from '../../../../utils/formatters/format-date';
import { TableContainer, TableHeader, TableRow } from './components';
import { useWordsTable } from './useWordsTable';

export const WordsTable: ComponentType = () => {
  const { columns, isError, isFetching, isLoading, data } = useWordsTable();

  if (isError) {
    return (
      <Center mt={8}>
        <Text color='red.400'>Ocorreu algum erro</Text>
      </Center>
    );
  }

  if (isLoading || isFetching) {
    return (
      <Center mt={48}>
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='primary.500'
          size='xl'
          display='block'
        />
      </Center>
    );
  }

  return (
    <TableContainer>
      <Table variant='simple' size='sm' p={2} colorScheme='orange'>
        <TableHeader columns={columns} />

        <Tbody>
          {data?.items.map(({ id, word, translation, createdAt, updatedAt }) => {
            const columns = [
              <Text fontWeight='bold'>{word}</Text>,
              translation,
              <Button
                size='sm'
                backgroundColor='secondary.500'
                color='white'
                textAlign='center'
                _hover={{ transition: '0.2s', filter: 'brightness(0.95)' }}
              >
                View
              </Button>,
              updatedAt ? formatDate(updatedAt) : formatDate(createdAt)
            ];

            return <TableRow key={id} columns={columns} />;
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
