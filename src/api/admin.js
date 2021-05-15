// eslint-disable-next-line no-unused-vars
import request from '../utils/request'

/**
 * 管理员登录
 * @param adminName
 * @param adminPwd
 * @returns {AxiosPromise}
 */
export const adminLogin = (adminName, adminPwd) => {
  return request({
    url: '/Admin/AdminLogin',
    method: 'post',
    params: {
      adminName,
      adminPwd
    }
  })
}
