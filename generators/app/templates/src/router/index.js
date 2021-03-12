import Vue from "vue";
import Router from "vue-router";
let importAll = require.context('./modules', false, /\.js$/);

Vue.use(Router);

let allChildrenRouter = [];
importAll.keys().forEach(path => {
  // 兼容处理：.default获取ES6规范暴露的内容; 后者获取commonJS规范暴露的内容
  let routerItem = importAll(path).default || importAll(path)
  allChildrenRouter.push(routerItem);
})

export const initRouter = [...allChildrenRouter];

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: initRouter
});
