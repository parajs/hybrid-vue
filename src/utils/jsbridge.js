//存入funcname对应的函数
let fn = {};
//暴露给原生的js方法
window.onCallJs = function(...arg) {
  //alert(Object.keys(fn).indexOf(arg[0])!=-1);
  //alert(Object.keys(fn).indexOf(arg[0])!=-1 && fn[arg[0]] && Object.prototype.toString.call(fn[arg[0]])==='[object Function]');
  if (
    Object.keys(fn).indexOf(arg[0]) != -1 &&
    fn[arg[0]] &&
    Object.prototype.toString.call(fn[arg[0]]) === "[object Function]"
  ) {
    let sl = arg.slice(1);
    let arr = [];
    for (let index = 0; index < sl.length; index++) {
      const element = sl[index];
      if (typeof element == "string") {
        arr.push(JSON.parse(sl[index]));
      }
    }
    console.log(arr);
    fn[arg[0]](arr);
    delete fn[arg[0]];
  } else {
    console.log("找不到这个函数或者这不是函数");
  }
};

/**
 *将json装换成url,返回一url
 * @param url:当前需要处理的url。(必须)
 * @param json:当前需要添加到url后当数据的json数据(可选)
 * @param json.link:当前数据直接的链接符号，默认为&&
 * @returns string
 */
function json_query(json) {
  var link = "";
  if (!json.link) {
    link = "&&";
  } else {
    link = json.link;
  }
  delete json.link;
  var query = "";
  for (var key in json) {
    if (!!json[key] && json[key].toString() !== "undefined") {
      let v = "";
      if (json[key] instanceof Object) {
        v = JSON.stringify(json[key]);
      } else {
        v = json[key];
      }
      query += encodeURIComponent(key) + "=" + encodeURIComponent(v) + link;
    }
  }
  return query.substring(0, query.length - 2);
}

var nativeJson = {
  /*
   ** nativeCommon  调用功能号
   ** action 当前功能号
   ** @params json [object]
   ** @params json.callbackName [string] 回调函数的名字
   ** @params json.callback  回调函数，必须有一个非匿名的返回函数作为返回值，并接收两个参数,分别为当前状态，和读取的值
   **
   */
  nativeCommon: function(action, json) {
    if (json) {
      var fnCallnback = json.callback;
      var fnCallbackName = json.callbackName;
      delete json.callback;
      delete json.callbackName;
      json.callback = fnCallbackName;
      fn[fnCallbackName] = fnCallnback;
      var query = json_query(json);
      console.log("[jsbridge-json]:%o", json);
      window.location.href = "jsbridge://" + action + "?" + query;
    } else {
      window.location.href = "jsbridge://" + action;
    }
  },
  /**
   * h5向native拿数据路径
   */
  getAppData: "NATIVE_SERVICE_DATA_SERVICE/READ_MEM_FROM_NATIVE/",
  /**
   * h5页打开原生某个页面
   */
  navigateTo: function(path) {
    this.nativeCommon(`NATIVE_SERVICE_TYPE_WEB_CONTAINER/${path}`);
  },
  /**
   * h5页返回原生页
   */
  navigateBack: function() {
    this.nativeCommon("NATIVE_SERVICE_WEB_CONTAINER/H5_EXEC_NATIVE_BACK");
  },
  /**
   * 打开一个新浏览器并加载浏览
   */
  openNewBrowser: function() {
    this.nativeCommon("NATIVE_SERVICE_WEB_CONTAINER/H5_OPEN_NEW_BROWSER");
  }
};

window.jsbridge = nativeJson;
