import request from "@/utils/request";
/**
 * @description 获取用户列表
 * @param { Object } data
 * @param { string } data.username - 用户名
 * @param { string } data.password - 密码
 * @param { string } data.isAgree - 是否同意协议
 * @returns Promise
 */
export function login(data) {
  return request({
    url: `/user/login`,
    method: "post",
    data
  });
}

/**
 * @description: 用户结束会话
 * @param {type}
 * @return: Promise
 */
export function logout() {
  return request({
    url: "/user/logout",
    method: "post"
  });
}

/**
 * @description: 获取用户资料 token || uid
 * @param { string }
 * @return: Promise
 */
export function getuser(params) {
  return request({
    url: `/user/getuser`,
    method: "get",
    params: params
  });
}

/**
 * @description 获取用户列表
 * @returns Promise
 */
export function findUserList() {
  return request({
    url: "/user/findUserList",
    method: "get"
  });
}
