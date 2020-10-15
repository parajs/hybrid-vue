import Layout from "layout";
import Home from "views/Home";
import My from "views/My";
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
          keepAlive: true
        }
      },
      {
        path: "/my",
        name: "My",
        component: My,
        meta: {
          keepAlive: true
        }
      }
    ]
  },
  {
    path: "/test",
    name: "Test",
    component: () => import(/* webpackChunkName: "test" */ "views/Test")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
