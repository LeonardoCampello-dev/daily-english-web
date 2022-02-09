import { api } from '../config/axios-api'

import { useCallback } from 'react'
import { Endpoint } from '../types'
import { GetAllRequestResponse } from './api/daily-english-api/interfaces/get-all-request-response'

export const useDailyEnglishAPI = (endpoint: Endpoint) => {
  const get = useCallback(
    async <Item>() => (await api.get<GetAllRequestResponse<Item>>(`/${endpoint}`)).data,
    [endpoint]
  )

  const getOneById = useCallback(
    async <Item, IdType = string>(id: IdType) => (await api.get<Item>(`/${endpoint}/${id}`)).data,
    [endpoint]
  )

  const create = useCallback(
    async <Request, Response>(data: Request) =>
      (await api.post<Response>(`/${endpoint}`, data)).data,
    [endpoint]
  )

  const update = useCallback(
    async <Data, Response, Identifier = string>(identifier: Identifier, data: Data) =>
      (await api.patch<Response>(`/${endpoint}/${identifier}`, data)).data,
    [endpoint]
  )

  const deleteOneById = useCallback(
    async <ReturnType = void, IdType = string>(id: IdType) =>
      (await api.delete<ReturnType>(`/${endpoint}/${id}`)).data,
    [endpoint]
  )

  return {
    get,
    getOneById,
    create,
    update,
    deleteOneById
  }
}
