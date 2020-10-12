import "@/icons"; // icon
import "@/styles/index.less";
import Page from "components/Page";
import createEventBus from "utils/eventBus";
import "utils/jsbridge";
import Vant from "vant";
import "vant/lib/index.less";
import Vue from "vue";
import App from "./App.vue";
import * as filters from "./filters"; // global filters
import i18n from "./i18n";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./permission";

Vue.component(Page.name, Page);
Vue.use(Vant);
createEventBus(Vue);
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

if (process.env._ENABLE_MOCK) {
  require("./mock");
}

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
