import { message } from 'antd'
import axios from 'axios'

const instance = axios.create({
  timeout: 10 * 1000,
})

instance.interceptors.response.use(response => {
  const resData = (response.data || {}) as ResType
  const { errno, data, msg } = resData
  if (errno !== 0) {
    if (msg) {
      console.error(msg)
      message.error(msg)
    }

    throw new Error(msg || '请求失败')
  }

  return data as any
})

export default instance

export type ResType = {
  errno?: number
  data?: ResDataType
  msg?: string
}

export type ResDataType = {
  [key: string]: any
}
