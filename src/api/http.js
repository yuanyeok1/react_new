import axios from 'axios';
//import history from '@/router/history';/

const instance = axios.create();
instance.defaults.timeout = 5000;

//添加请求前拦截
instance.interceptors.request.use(function (config) {
    if (process.env.NODE_ENV === 'development') {
        if (!/\.json/.test(config.url)) {
            config.url = '/dev' + config.url;
        }
    }
    let lang = localStorage.getItem('lang') || 'vi';

    if (config.method === 'post') {
        let {data}=config,res = '';
        data = Object.assign({_:Date.now(),lang},data); //post 请求统一添加时间戳
        for(let p in data){
            res += encodeURIComponent(p)+'='+encodeURIComponent(data[p])+'&'
        }
        config.data = res
        config.headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    } else {
        config.params = Object.assign({_:Date.now(),lang},config.params)//get 请求统一添加时间戳
    }

    config = Object.assign(
        {
            headers: {
                'Content-type': 'application/json;charset-UTF-8'
            }
        },
        config
    );

    return config;
}, function (error) {
    return Promise.reject(error);
});

//添加响应拦截
instance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    //history.push('/home');
    error.msg = error.message.includes('timeout') ? '请求超时':'服务失败'
    return Promise.reject(error);
});

export default instance;