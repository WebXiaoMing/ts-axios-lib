import { AxiosRequestConfig } from '@/types'

function xhr<T = any>(config: AxiosRequestConfig): Promise<T> {
  return new Promise((resolve, reject) => {
    const { url, method } = config
    const request = new XMLHttpRequest()
    request.open(method.toUpperCase(), url)

    function onloadend(): void {
      resolve(request as any)
    }

    request.onloadend = onloadend
  })
}

export default xhr
