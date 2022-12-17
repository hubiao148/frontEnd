/*
 * @Author: hcy
 * @Date: 2022-11-27 16:13:42
 * @LastEditors: hcy
 * @LastEditTime: 2022-12-05 16:28:31
 * @FilePath: \src\src\api\myShare\latest.ts
 * @Description:
 *
 */

import request from '../api';

export function latestData(params:number) {
  return request({
    method: 'get',
    url: '/techqa/totechqa',
    params
  });
}

