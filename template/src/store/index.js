import Vue from 'vue';
import Vuex from 'vuex';
let importAll = require.context('./modules', false, /\.js$/);

let storeAll = {};

importAll.keys().forEach(path => {
  let storeItem = importAll(path).default || importAll(path);
  storeAll = Object.assign(storeItem, store);
});

Vue.use(Vuex);

const store = new Vuex.Store({
  // strict: process.env.NODE_ENV !== "production",
  modules: { ...storeAll }
})

export default store
