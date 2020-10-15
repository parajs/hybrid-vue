// 从全局获取
const getAppData = window.jsbridge.getAppData;

/**
 * @description 获取用户列表
 * @param { Object } data
 * @param { string } data.username - 用户名
 * @param { string } data.password - 密码
 * @param { string } data.isAgree - 是否同意协议
 * @returns Promise
 */
export function login(data) {
  return new Promise(function(resolve, reject) {
    window.jsbridge.nativeCommon(getAppData, {
      params: {
        method: "post",
        url: "/user/login",
        data
      },
      callbackName: "login",
      callback: function(arg) {
        if (arg.length > 0) {
          const res = arg[0];
          if (res.code !== 200) {
            console.log("[login-reject]:%o", res);
            reject(res);
          } else {
            console.log("[login-resolve]:%o", res);
            resolve(res);
          }
        }
      }
    });
  });
}

/**
 * @description: 用户结束会话
 * @param {type}
 * @returns Promise
 */

export function logout(data) {
  return new Promise(function(resolve, reject) {
    window.jsbridge.nativeCommon(getAppData, {
      params: {
        method: "post",
        url: "/user/logout",
        data
      },
      callbackName: "logout",
      callback: function(arg) {
        if (arg.length > 0) {
          const res = arg[0];
          if (res.code !== 200) {
            console.log("[logout-reject]:%o", res);
            reject(res);
          } else {
            console.log("[logout-resolve]:%o", res);
            resolve(res);
          }
        }
      }
    });
  });
}

/**
 * @description: 获取用户资料 token || uid
 * @param { string }
 * @return: Promise
 */
export function getuser(data) {
  return new Promise(function(resolve, reject) {
    window.jsbridge.nativeCommon(getAppData, {
      params: {
        method: "get",
        url: "/user/getuser",
        data
      },
      callbackName: "getuser",
      callback: function(arg) {
        if (arg.length > 0) {
          const res = arg[0];
          if (res.code !== 200) {
            console.log("[getuser-reject]:%o", res);
            reject(res);
          } else {
            console.log("[getuser-resolve]:%o", res);
            resolve(res);
          }
        }
      }
    });
  });
}

/**
 * @description 获取用户列表
 * @returns Promise
 */
export function findUserList(data) {
  return new Promise(function(resolve, reject) {
    window.jsbridge.nativeCommon(getAppData, {
      params: {
        method: "get",
        url: "/user/findUserList",
        data
      },
      callbackName: "findUserList",
      callback: function(arg) {
        if (arg.length > 0) {
          const res = arg[0];
          if (res.code !== 200) {
            console.log("[findUserList-reject]:%o", res);
            reject(res);
          } else {
            console.log("[findUserList-resolve]:%o", res);
            resolve(res);
          }
        }
      }
    });
  });
}
