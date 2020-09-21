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
    fn[arg[0]](arg.slice(1));
    delete fn[arg[0]];
  } else {
    console.log("找不到这个函数或者这不是函数");
  }
};

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
      window.location.href = "mobxybank://" + action + "?" + query;
    } else {
      window.location.href = "mobxybank://" + action;
    }
    //fn[fnCallnback.name](JSON.stringify({token:token,khh:khh}),'0');
    // alert("mobxybank://"+action+'?'+query);
  }
};

export default nativeJson;
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
      query +=
        encodeURIComponent(key) + "=" + encodeURIComponent(json[key]) + link;
    }
  }
  console.log(query.substring(0, query.length - 2));
  return query.substring(0, query.length - 2);
}
