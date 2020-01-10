// import { getConfig } from './initialize'
import { promise, channel } from '@hupo/core'
import { request } from '@hupo/core-request-uni'

const HEADERS = { 'Content-Type': 'application/json;charset=utf-8' }
const cacheSend = config => {
  const key = config.cache + JSON.stringify({
    options: config.options,
    params: config.params,
    data: config.data
  })
  return promise.cache(key, () => send(config))
}
const ERROR_CODE = [40004, 40005, 40015]
const filter = response => response && response.data && ERROR_CODE.indexOf(response.data.code) === -1
export const send = async config => {
  // await getConfig
  const { params = {}, data = {}, options = {}} = config
  const { type = 'GET' } = options
  // get channel放在url上
  if (type.toUpperCase() === 'GET') {
    params.channel = channel
    config.params = params
  } else {
    // post放在data上
    data.channel = channel
    config.data = data
  }
  return request.send(config)
}
export default {
  methods: {
    async $api() {
      console.log('请使用 _request')
    },
    async _request(config) {
      // 自动添加token
      const token = await this._getToken()
      const { headers = HEADERS, cache = false } = config
      headers['Authorization'] = `Bearer ${token}`
      config.headers = headers
      try {
        // 缓存接口
        if (cache) {
          return await cacheSend(config)
        } else {
          return await send(config)
        }
      } catch (error) {
        console.log(error)
        switch (true) {
          // token 过期
          case error.response && error.response.status === 401:
            if (this._clearUser) await this._clearUser()
            return await this._request(config)
          case !!error.message && filter(error.response):
            if (this._toast) this._toast(error.message)
            return promise.exit(error)
          default:
            return promise.exit(error)
        }
      }
    }
  }
}
