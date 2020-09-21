/**
 * h5向native拿数据路径
 */
export const getAppData = "NATIVE_SERVICE_DATA_SERVICE/READ_MEM_FROM_NATIVE/";

/**
 * h5页返回原生页路径
 */
export const navigateToApp = "NATIVE_SERVICE_WEB_CONTAINER/H5_EXEC_NATIVE_BACK";

/**
 * 打开一个新浏览器并加载浏览
 */
export const openNewBrowser =
  "NATIVE_SERVICE_WEB_CONTAINER/H5_OPEN_NEW_BROWSER";

/**
 * h5页打开原生某个页面
 */

export function navigateTo(path) {
  return `NATIVE_SERVICE_TYPE_WEB_CONTAINER/${path}`;
}
