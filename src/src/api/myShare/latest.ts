/*
 * @Author: hcy
 * @Date: 2022-11-27 16:13:42
 * @LastEditors: hcy
 * @LastEditTime: 2022-11-29 16:54:58
 * @FilePath: \src\src\api\myShare\latest.ts
 * @Description:
 *
 */

import request from '../api';

export function latestData(id:number) {
  request({
    method: 'get',
    url: `/techqa/${id}`,
  });
}
