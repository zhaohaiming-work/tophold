import axios from 'axios'
import example from './example'
import xswap from './xswap'
import { message } from 'antd'
// 接口模块

// 实例化 ajax请求对象
const ajaxinstance = axios.create({
  baseURL: 'https://api-web.xswap.io',
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})

// 请求拦截器
ajaxinstance
  .interceptors
  .request
  .use((config) => {
    return config
  }, (error) => {
    Promise.reject(error)
  })

// 响应拦截器
ajaxinstance
  .interceptors
  .response
  .use((response) => {
    // console.log(response)
    return response.data
  }, (error) => {
    // console.log(JSON.stringify(error))
    // message.info(error.config)
    return Promise.reject(error)
  })

/**
 * [API api接口封装]
 * @type {Object}
 */
const API = {
  ...example,
  ...xswap
}
export const ajax = ajaxinstance
export default API
