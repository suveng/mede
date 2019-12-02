/*
http请求封装, 请求拦截,返回打印
 */
import axios from 'axios';
//使用element ui 的加载动画
import {Message, Loading} from 'element-ui';

//设置loading变量
let loading;

// 打开loading动画
function startLoading() {
    loading = Loading.service({
        lock: true,
        text: '加载中...',
        background: 'rgba(0,0,0,0.7)'
    });
}

// 关闭loading动画
function endLoading() {
    loading.close();
}

//请求拦截
axios.interceptors.request.use(config => {
    //加载动画
    startLoading();
    //打印日志
    console.log("发起请求:" + config.url + "#" + config.data);
    return config;
}, error => {
    //打印日志
    console.log("发起请求错误:" + error);
    console.log(error);
    return Promise.reject(error);
});

//响应拦截
axios.interceptors.response.use(response => {
    //结束加载动画
    endLoading();
    //打印日志
    console.log("请求结果: " + response.data);
    console.log(response);
    return response;
}, error => {
    //结束加载动画
    endLoading();
    //打印日志
    console.log("请求失败: " + error);
    console.log(error);

    //错误提示
    Message.error(error.response);

    return Promise.reject(error);
});


export default axios;

