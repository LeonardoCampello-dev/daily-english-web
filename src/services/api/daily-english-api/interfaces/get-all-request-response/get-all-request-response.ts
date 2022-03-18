export interface GetAllRequestResponse<TResponse = object> {
  items: TResponse[]
  count: number
}
