export type RequestMethod = 'get' | 'post' | 'put' | 'delete' | 'option'

export type AxiosOptionsMethod = Uppercase<RequestMethod>

export interface AxiosRequestConfig<T = any> {
  url: string
  method: AxiosOptionsMethod
  data?: T
  params?: T
}
