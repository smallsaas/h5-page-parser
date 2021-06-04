import axios from 'axios'
import { Toast } from 'vant'
import qs from 'qs'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 60000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    // if (getToken()) {
    //   // let each request carry token
    //   // ['X-Token'] is a custom headers key
    //   // please modify it according to the actual situation
    //   config.headers['X-Token'] = getToken()
    // }
    if (config.method === 'post' && config.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
      config.data = qs.stringify(config.data)
    }
    return config
  },
  error => {
    // do something with request error
    console.log('service.interceptors.request: ', error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    const errMsg = res.retMsg
    if (res.code === '00000') {
      return res
    }
    Toast(errMsg || res.code)
    return Promise.reject(res)
  },
  error => {
    console.log('service.interceptors.response:', error)
    if (error.code === 'ECONNABORTED' || error.message.indexOf('timeout') >= 0) {
      Toast('请求超时')
      const e = { reason: 'TIMEOUT' }
      return Promise.reject(e)
    }
    Toast(error.message || 'request error')
    return Promise.reject(error)
  }
)

export default service
