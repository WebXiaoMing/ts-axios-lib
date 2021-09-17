import { AxiosRequestConfig } from '@/types'
class Axios {
  defaults: AxiosRequestConfig
  constructor(config: AxiosRequestConfig) {
    this.defaults = config
    // TODO
  }

  dispatchRequest() {}
}

export default Axios
