// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex';
import store from '@/store';
import ElementUI from 'element-ui';
import { EventBusPlugin as EventBus } from '@/utils/EventBus';
import Common from "@/utils/Common.js";
import echarts from 'echarts';
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts;

const components = {
  Vuex,
  ElementUI,
  EventBus,
  Common
};

Object.keys(components).forEach(key => Vue.use(components[key]));

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
