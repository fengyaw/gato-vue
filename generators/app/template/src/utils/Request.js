import axios from "axios";
import { Message } from 'element-ui'

// 创建axios实例
const service = axios.create({
  timeout: 180000, // 请求超时时间
  withCredentials: true // 允许携带cookie
});

// request拦截器
service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    // Do something with request error
    Promise.reject(error);
  }
);

// respone拦截器
service.interceptors.response.use(
  response => {
    if (response.data.success) {
      return response;
    } else {
      Message.error(response.data.msg)
    }
  },
  error => {
    Message.error("请求错误")
    return Promise.reject(error);
  }
);

export default service;
