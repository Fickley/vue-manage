import axios from "axios"
import NProgress from "nprogress"

const service = axios.create();
//  请求拦截器
service.interceptors.request.use(
  (config) => {
    NProgress.start(); 
    return config
  },
  // 发送失败
  (error) => {
    NProgress.done(); 
    return Promise.reject(error)
  }
)

// 响应拦截（可根据具体业务作出相应的调整）
service.interceptors.response.use(
  (response) => {
    const data = response?.data || {};
    // 二进制数据则直接返回
    const responseType = response.request?.responseType;
    NProgress.done();
    if (responseType === "blob" || responseType === "arraybuffer") {
      return data
    }
    if (data.code != 200) {
      ElMessage.error(data.message || "请求失败")
      return Promise.reject(data.message || new Error("请求失败"))
    }
    return data;
  },
  (error) => {
    NProgress.done();
    ElMessage.error(error.message)
    return Promise.reject(error)
  }
)

/** 创建请求方法 */
const createRequest = () => {
  return (config) => {
    const token = localStorage.getItem('token');
    const defaultConfig = {
      headers: {
        // 携带 Token
        Authorization: token ? `Bearer ${token}` : undefined,
        "Content-Type": "application/json"
      },
      timeout: 2000,
      baseURL: import.meta.env.VITE_BASE_API,
      data: {}
    }
    return service({...defaultConfig, ...config})
  }
}

/** 用于网络请求的方法 */
export const request = createRequest()
