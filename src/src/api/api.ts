/*
 * @Author: hcy
 * @Date: 2022-10-04 17:08:52
 * @LastEditors: hcy
 * @LastEditTime: 2022-10-05 15:15:10
 * @FilePath: \src\src\api\api.ts
 * @Description: axios封装
 *
 */
import axios from 'axios';

import configEnv from '@/utils/configEnv';
import mock from '@/utils/configEnv';
/* axios配置 */
export const service = axios.create({
  //基本地址
  baseURL: mock ? configEnv.mockApi : configEnv.baseApi,
  //设置超时时间
  timeout: 10000,
  // headers: {
  //     // "content-type": "application/json",
  //     // "content-type": "application /x-www-urlcoded",
  //     // "Access-Control-Allow-Origin": "*"
  //     // "Content-Type": "multipart/form-data"
  // }
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

/* POST传参序列化(添加请求拦截器) */
service.interceptors.request.use(
  (config) => {
    /* 在发送请求之前做某件事 */
    // console.log(config)
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);

/* 返回状态判断(添加响应拦截器) */
service.interceptors.response.use(
  (res) => {
    /* 对响应数据做些事 */
    if (!res.data.success) {
      return Promise.reject(res);
    }

    console.log(res);
    return res;
  },
  (error) => {
    // console.log(error)
    return Promise.reject(error);
  },
);

/* 返回一个Promise(发送post请求) */
export function post(url: string, params: object) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, {
        data: params,
      })
      .then(
        (response) => {
          resolve(response.data);
        },
        (err) => {
          reject(err);
        },
      )
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}

/* 返回一个Promise(发送get请求) */
export function get(url: string, param?: object) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: param,
      })
      .then(
        (response) => {
          resolve(response.data);
        },
        (err) => {
          reject(err);
        },
      )
      .catch((error) => {
        reject(error);
      });
  });
}
