// 导入axios

import axios from "axios"

// 对axios进行封装
// 让ret替代ret.data，使得以后再去获取返回结果直接使用ret即可
// 拦截器 作用是拦截请求和响应的 
// 请求拦截器、响应拦截器
// 请求拦截器 使用场景：需要再请求的时候设置全局的超时时间、设置比较统一的请求头等
axios.interceptors.request.use(config => {
    // 拦截下来
    // 在这里总价上额外需要的处理，比如加头信息、加全局配置。。。

    //放行
    return config;
})

// 响应拦截器
// 使用场景：用于对响应结果进行加工处理再返回
axios.interceptors.response.use(ret => {
    // 拦截下来
    // 对数据进行再加工
    // if(ret.data){
    //     return ret.data
    // }else{
    //     return ret;
    // }

    //放行
    // return ret.data?ret.data:ret;
    // (短路运算)
    return ret.data || ret;

})

//导出axios
export default axios;
