import axios from '@/utils/Request';
import RestApi from '@/restApi';

export var DemoHttp = {

  /**
   * 接口调用示例
   */
  test(holder) {
    let url = RestApi.demo.test;
    let data = {};
    for (let k in holder) {
      data[k] = holder[k];
    }
    return axios({
      method: "post",
      url,
      data
    });
  },
};

function install(Vue) {
  Vue.prototype.$demoHttp = DemoHttp;
};

export default install;
