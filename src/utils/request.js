import axios from "axios";
import store from "store";
import { getCookie } from "utils/cookie";
import { Notify } from "vant";
// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
});

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    if (store.getters.token) {
      // let each request carry token
      // ['token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers["token"] = getCookie(process.env.VUE_APP_TOKEN);
    }
    return config;
  },
  error => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data;

    // if the custom code is not 200, it is judged as an error.
    if (res.code !== 200) {
      Notify({ type: "danger", message: res.message || "Error" });
      // 403: forbidden login; 401: Token expired;
      if (res.code === 401 || res.code === 403) {
        store.dispatch("user/logout");
      }
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return res;
    }
  },
  error => {
    console.log("err" + error); // for debug
    Notify({ type: "danger", message: error.message || "Error" });
    return Promise.reject(error);
  }
);

export default service;
