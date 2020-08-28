import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
import { getCookie } from "utils/cookie"; // get token from cookie
import getPageTitle from "utils/get-page-title";
import router from "./router";
import store from "./store";

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const whiteList = ["Home", "List", "My"]; // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start();
  // set page title/
  document.title = getPageTitle(to.meta.title);

  // determine whether the user has logged in
  const hasToken = getCookie(process.env.VUE_APP_TOKEN);
  if (hasToken) {
    const hasGetUserInfo = store.getters.user.id;
    if (hasGetUserInfo) {
      next();
    } else {
      try {
        // get user info
        await store.dispatch("user/getuser");
        next();
      } catch (error) {
        // remove token and go to home
        await store.dispatch("user/reset");
        NProgress.done();
      }
    }
  } else {
    // has no token
    if (whiteList.indexOf(to.name) !== -1) {
      // in the free login whitelist, go directly
      next();
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next("/login");
      NProgress.done();
    }
  }
});

router.afterEach(() => {
  // finish progress bar
  NProgress.done();
});
