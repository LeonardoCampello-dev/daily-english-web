import { Th, Thead, Tr } from '@chakra-ui/react';
import { ComponentType } from 'react';

export const TableHeader: ComponentType<TableHeaderProps> = ({ columns }) => {
  return (
    <Thead>
      <Tr>
        {columns.map(column => (
          <Th px={2} textAlign='center'>
            {column}
          </Th>
        ))}
      </Tr>
    </Thead>
  );
};

type TableHeaderProps = {
  columns: (string | JSX.Element)[];
};
