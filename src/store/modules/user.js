import { getUser, login, logout } from "api/user";
import router from "router";
import { mutateState } from "utils";
import { getCookie, removeCookie, setCookie } from "utils/cookie";

const state = {
  token: getCookie(process.env.VUE_APP_TOKEN),
  user: {
    username: ""
  }
};

const mutations = {
  mutateState
};

const actions = {
  async login({ commit }, payload) {
    const result = await login(payload);
    commit("mutateState", result.data);
    const { token } = result.data;
    setCookie(process.env.VUE_APP_TOKEN, token);
    return result;
  },
  async logout({ commit }) {
    const result = await logout();
    commit("mutateState", { token: "", username: { username: "" } });
    removeCookie(process.env.VUE_APP_TOKEN);
    router.push("/");
    return result;
  },
  reset({ commit }) {
    commit("mutateState", { token: "", user: { username: "" } });
    removeCookie(process.env.VUE_APP_TOKEN);
    router.push("/my");
  },
  async getUser({ commit }, payload) {
    const result = await getUser(payload);
    commit("mutateState", result.data);
    const { token } = result.data;
    setCookie(process.env.VUE_APP_TOKEN, token);
    return result;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
