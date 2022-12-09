/*
 * @Author: hcy
 * @Date: 2022-12-05 19:19:13
 * @LastEditors: hcy
 * @LastEditTime: 2022-12-05 19:38:18
 * @FilePath: \src\src\api\myShare\addVistNum.ts
 * @Description:添加访问数量
 *
 */
import request from '../api';

export function addVistNum(id: number) {
  return request({
    method: 'get',
    url: `/techqa/visit/${id}`,
  });
}
