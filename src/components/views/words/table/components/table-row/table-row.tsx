import { Tr, Td } from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';

import { ComponentType } from 'react';

export const TableRow: ComponentType<TableRowProps> = ({ columns, actions }) => {
  return (
    <Tr>
      {columns.map(column => (
        <Td px={2} textAlign='center'>
          {column}
        </Td>
      ))}

      <Td px={2} textAlign='center'>
        {actions?.edit && <EditIcon onClick={actions?.edit} />}
        {actions?.delete && <DeleteIcon onClick={actions?.delete} ml={actions?.edit && '16px'} />}
      </Td>
    </Tr>
  );
};

type TableRowProps = {
  columns: (string | JSX.Element)[];
  actions?: {
    delete?: () => void;
    edit?: () => void;
  };
};
