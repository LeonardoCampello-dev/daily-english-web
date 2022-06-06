import { AddIcon } from '@chakra-ui/icons'

import { ComponentType } from 'react'

import { EditPhrase } from '../edit'
import { usePhrasesTable } from './hooks'
import { Table } from 'modules/layout'
import { EditModal } from 'modules/presentational'
import { BaseButton } from 'modules/buttons'

export const PhrasesTable: ComponentType = () => {
  const { columns, isError, isFetching, isLoading, data, rows } = usePhrasesTable()

  return (
    <Table
      hasActions
      columns={columns}
      rows={rows}
      rowsCount={data?.items.length}
      isError={isError}
      isLoading={isLoading || isFetching}
      componentBeforeTable={
        <EditModal
          title="Add new phrase"
          onOpenButton={
            <BaseButton backgroundColor="primary.500" color="white" mb={2} leftIcon={<AddIcon />}>
              Add new phrase
            </BaseButton>
          }
        >
          <EditPhrase />
        </EditModal>
      }
    />
  )
}
