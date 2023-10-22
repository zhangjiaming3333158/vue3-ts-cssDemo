import axios from 'axios'

const request = axios.create({
  baseURL: '',
  timeout: 5000,
})

// 拦截器

// axios请求拦截器
request.interceptors.request.use(
  (config) => {
    config.headers.Accept = 'application/json'; // 设置请求头的 Accept 字段
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


// axios响应式拦截器
request.interceptors.response.use(
  (res) => res.data,
  (e) => {
    return Promise.reject(e)
  }
)

export default request