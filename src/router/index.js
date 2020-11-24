import Home from "views/Home";
import My from "views/My";
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      keepAlive: true
    }
  },
  {
    path: "/detail/:id",
    name: "Detail",
    component: () => import(/* webpackChunkName: "detail" */ "views/Detail")
  },
  {
    path: "/my",
    name: "My",
    component: My,
    meta: {
      keepAlive: true
    }
  },
  {
    path: "/test",
    name: "Test",
    component: () => import(/* webpackChunkName: "test" */ "views/Test")
  }
];

// scrollBehavior:
// - only available in html5 history mode
// - defaults to no scroll behavior
// - return false to prevent scroll
const scrollBehavior = function(to, from, savedPosition) {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition;
  } else {
    const position = {};

    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash;

      // specify offset of the element
      // if (to.hash === "#anchor2") {
      //   position.offset = { y: 100 };
      // }

      // bypass #1number check
      if (/^#\d/.test(to.hash) || document.querySelector(to.hash)) {
        return position;
      }

      // if the returned position is falsy or an empty object,
      // will retain current scroll position.
      return false;
    }

    return new Promise(resolve => {
      // check if any matched route config has meta that requires scrolling to top
      if (to.matched.some(m => m.meta.scrollToTop)) {
        // coords will be used if no selector is provided,
        // or if the selector didn't match any element.
        position.x = 0;
        position.y = 0;
      }

      resolve(position);
    });
  }
};

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior
});

export default router;
