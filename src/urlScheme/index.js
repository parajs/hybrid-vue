// URL Scheme 协议
const scheme = "mobxybank://";

/**
 * h5 页面发起一个自定义 URL Scheme 协议请求
 * @date 2020-09-01
 * @param {Object} params
 * @param {string} params.userId
 * @param {string} params.token
 * @returns {any}
 */

export function READ_MEM_FROM_NATIVE(params = {}) {
  const action = "NATIVE_SERVICE_DATA_SERVICE/READ_MEM_FROM_NATIVE";
  location.href = `${scheme}${action}/?params=${JSON.stringify(params)}`;
}

/**
 *  原生页返回
 * @date 2020-09-01
 * @returns {any}
 */

export function H5_EXEC_NATIVE_BACK() {
  const action = "NATIVE_SERVICE_WEB_CONTAINER/H5_EXEC_NATIVE_BACK";
  location.href = `${scheme}${action}`;
}

/**
 * 打开一个新浏览器并加载浏览
 * @date 2020-09-01
 * @param {Object} params
 * @param {string} params.url
 * @returns {any}
 */

export function H5_OPEN_NEW_BROWSER(params = {}) {
  const action = "NATIVE_SERVICE_WEB_CONTAINER/H5_OPEN_NEW_BROWSER";
  location.href = `${scheme}${action}/?params=${JSON.stringify(params)}`;
}

/**
 * 打开某个页面
 * @date 2020-09-01
 * @param {Object} params
 * @returns {any}
 */

export function NATIVE_SERVICE_TYPE_WEB_CONTAINER(params = {}) {
  const action = "NATIVE_SERVICE_TYPE_WEB_CONTAINER/xxxx";
  location.href = `${scheme}${action}/?params=${JSON.stringify(params)}`;
}
