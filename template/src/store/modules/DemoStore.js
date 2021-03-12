// import Cookies from 'js-cookie'
import { Storage } from "@/utils/Storage";

const demo = {
  state: {
    demo: Storage.readSession("demo") || [],
  },
  mutations: {
    SET_DEMO: (state, demo) => {
      state.demo = demo;
      Storage.saveSession("demo", demo);
    },
  },
  actions: {
    setDemo({ commit }, demo) {
      commit("SET_DEMO", demo);
    },
  }
};

export default demo;
