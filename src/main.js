import "@/icons"; // icon
import "@/styles/index.less";
import createEventBus from "utils/eventBus";
import JSBridge from "utils/JSBridge";
import { NavBar, Notify } from "vant";
import Vue from "vue";
import App from "./App.vue";
import * as filters from "./filters"; // global filters
import i18n from "./i18n";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
Vue.use(Notify);
Vue.use(NavBar);
Vue.prototype.JSBridge = JSBridge;
createEventBus(Vue);
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

if (process.env.SERVE_TYPE == "mock") {
  require("./mock");
}

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
