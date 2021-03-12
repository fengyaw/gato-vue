
export var COMMON = {
  // 用js维护一套产生不重复id的机制
  genModelIndex() {
    let idStr = Date.now().toString(36);
    idStr += Math.random().toString(36).substr(3);
    return idStr;
  },
};
function install(Vue) {
  Vue.prototype.$common = COMMON;
}

export default install;
