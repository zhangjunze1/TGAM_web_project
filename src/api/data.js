// eslint-disable-next-line no-unused-vars
import request from '../utils/request'

/**
 * 查找实施疲劳记录
 * @returns {AxiosPromise}
 */
export const findUserTired = (current, size) => {
  return request({
    url: '/Head/findUserTired',
    method: 'get',
    params: {
      current,
      size
    }
  })
}
