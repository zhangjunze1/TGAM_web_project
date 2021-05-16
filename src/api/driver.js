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

/**
 * 查找用户 车辆 正在驾驶 尚未使用 各种信息
 * @returns {AxiosPromise}
 */
export const findCarsAndUser = () => {
  return request({
    url: '/User/common/findCarsAndUser',
    method: 'get'
  })
}

/**
 * 点击按钮对当前疲劳的用户进行警告
 * @returns {AxiosPromise}
 */
export const warningAllTiredUser = () => {
  return request({
    url: '/User/common/warningAllTiredUser',
    method: 'POST'
  })
}

/**
 * 点击按钮对指定疲劳的用户进行警告
 * @returns {AxiosPromise}
 */
export const warningtiredUserById = (userId) => {
  return request({
    url: '/User/common/warningtiredUserById',
    method: 'POST',
    params: {
      userId
    }
  })
}
