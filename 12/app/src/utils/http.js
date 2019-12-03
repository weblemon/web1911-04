// 导入axios
import axios from "axios";
import router from "../router"

// 使用axios 创建一个api请求工具

const admin = axios.create({
    // baseURL: "http://console.ranyunlong.com:8080/renren-fast",
    baseURL: "/proxy-api",
    timeout: 1000,
    headers: {}
})


// axios 里面自带两种拦截器
// 1. 请求拦截器
admin.interceptors.request.use((config) => {
    // 在这里可以拦截到每一个从admin模块发出的http ajax请求
    // config 是还没发出去请求的参数
    // 如果需要更改可以在这里更改
    config.headers.token = localStorage.getItem("token");
   return config;
})

// 2. 响应拦截器
admin.interceptors.response.use(response => {
    // response 在这里可以拦截到所有通过admin模块发出的http ajax 请求的响应结果
    // console.log(response)
    const { code, msg } = response.data;
    // 如果后台返回的code是401 表示token失效
    // 或者有人仿造token
    if (code === 401) {
        // 去掉本地存储中的token
        localStorage.removeItem("token");
        router.replace("/login.html");
        console.log(msg);
    }
    return response;
})


export default admin;


// admin.post(url: string, data?: any, config?: AxiosRequestConfig): Promise<any>
// 1. url 请求地址 这个地址会和baseURL 拼接
// 2. data 可选参数 向后台提交的参数
// 3. config 可选参数 一些配置信息

// admin.get(url: string, config?: AxiosRequestConfig): Promise<any>