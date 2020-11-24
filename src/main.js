import "@/icons"; // icon
import "@/styles/index.less";
import BottomNav from "layout/BottomNav";
import Page from "layout/Page";
import createEventBus from "utils/eventBus";
/* IFTRUE_isAppEnv */
import "utils/jsbridge";
/* FITRUE_isAppEnv */
import Vant from "vant";
import "vant/lib/index.less";
import Vue from "vue";
import App from "./App.vue";
import * as filters from "./filters"; // global filters
import i18n from "./i18n";
import "./permission";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.component(Page.name, Page);
Vue.component(BottomNav.name, BottomNav);
Vue.use(Vant);
createEventBus(Vue);
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

/* IFDEBUG */
require("./mock");
/*FIDEBUG */

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
