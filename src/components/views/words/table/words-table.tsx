import { Table, Tbody, Text, Spinner, Center, Button } from '@chakra-ui/react';

import { ComponentType } from 'react';

import { Modal } from '../../../presentational';
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

  const actions = {
    edit: () => console.log('edit'),
    delete: () => console.log('delete')
  };

  return (
    <TableContainer>
      <Table variant='simple' size='sm' p={2} colorScheme='orange'>
        <TableHeader columns={columns} hasActions />

        <Tbody>
          {data?.items.map(({ id, word, translation, createdAt, updatedAt, note }) => {
            const columns = [
              <Text fontWeight='bold'>{word}</Text>,
              translation,

              <Modal
                title='Notes'
                size='sm'
                onOpenButton={
                  <Button
                    size='xs'
                    backgroundColor='secondary.500'
                    color='white'
                    textAlign='center'
                    _hover={{ transition: '0.2s', filter: 'brightness(0.95)' }}
                  >
                    View
                  </Button>
                }
              >
                <Text mb={8}>{note}</Text>
              </Modal>,
              updatedAt ? formatDate(updatedAt) : formatDate(createdAt)
            ];

            return <TableRow key={id} columns={columns} actions={actions} />;
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
