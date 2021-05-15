// eslint-disable-next-line no-unused-vars
import request from '../utils/request'

/**
 * 分页显示所有用户司机信息
 * @param current
 * @param size
 * @returns {AxiosPromise}
 */
export const findUserList = (current, size) => {
  return request({
    url: '/User/common/findUserList',
    method: 'get',
    params: {
      current,
      size
    }
  })
}

/**
 * 获取对应UserId的用户司机信息
 * @param sortId
 * @returns {AxiosPromise}
 */
export const getUserById = (userId) => {
  return request({
    url: '/User/common/getUserById',
    method: 'get',
    params: {
      userId
    }
  })
}

/**
 * 修改司机信息
 * @param userId
 * @param userCity
 * @param userAddress
 * @returns {AxiosPromise}
 */
export const editUser = (userId, userCity, userAddress) => {
  return request({
    url: '/User/common/editUser',
    method: 'get',
    params: {
      userId,
      userCity,
      userAddress
    }
  })
}

/**
 * 删除用户信息
 * @param userId
 * @returns {AxiosPromise}
 */
export const deleteUser = (userId) => {
  return request({
    url: '/User/common/deleteUser',
    method: 'get',
    params: {
      userId
    }
  })
}
