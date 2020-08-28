import "@/icons"; // icon
import "@/styles/index.less";
import { NavBar, Notify } from "vant";
import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
Vue.use(Notify);
Vue.use(NavBar);
if (process.env.NODE_ENV == "mock") {
  require("./mock");
}

if (process.env.NODE_ENV === "production") {
  const VConsole = require("vconsole");
  new VConsole();
}

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
