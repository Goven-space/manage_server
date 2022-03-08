import axios from 'axios';
import loading from './loading';
import {message} from 'antd';

const api = axios.create({
  baseURL : 'http://localhost:8000/goven/api_store/node_server/',
  timeout:180 * 1000,
  responseType:'json'
});

// 请求拦截器
api.interceptors.request.use((config) => {
  loading(true);
  if(!window.location.pathname.includes('login')){

  }
  console.log(window.location);
  return config;
});

//响应拦截器
api.interceptors.response.use((res) => {
  if(res.status === 200){
    if(!res.data.state){
      message.error(res.data.msg);
    }
    return Promise.resolve(res.data);
  }else{
    Promise.reject(res.data);
  }
});

export const post = (url,params,config) => {
  return new Promise((resolve,reject) => {
    api.post(url,params,config).then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    }).finally(()=>{
      loading(false);
    });
  });
};