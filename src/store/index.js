import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import modules from "./modules";
import { mutateState } from "utils";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {
    mutateState
  },
  actions: {},
  getters,
  modules
});
