import Layout from "layout";
import Home from "views/Home";
import List from "views/List";
import My from "views/My";
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Layout,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home
      },
      {
        path: "/list",
        name: "List",
        component: List
      },
      {
        path: "/my",
        name: "My",
        component: My
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
