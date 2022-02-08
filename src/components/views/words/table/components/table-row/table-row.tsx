import { Tr, Td } from '@chakra-ui/react';

import { ComponentType } from 'react';

export const TableRow: ComponentType<TableRowProps> = ({ columns }) => {
  return (
    <Tr>
      {columns.map(column => (
        <Td px={2} textAlign='center'>
          {column}
        </Td>
      ))}
    </Tr>
  );
};

type TableRowProps = {
  columns: (string | JSX.Element)[];
};
