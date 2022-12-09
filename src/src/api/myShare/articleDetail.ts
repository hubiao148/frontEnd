/*
 * @Author: hcy
 * @Date: 2022-12-05 20:16:12
 * @LastEditors: hcy
 * @LastEditTime: 2022-12-05 20:18:14
 * @FilePath: \src\src\api\myShare\articleDetail.ts
 * @Description:问答详情
 *
 */
import request from '../api';

export function articleDetail(id: any) {
  return request({
    method: 'get',
    url: `/techqa/detail/${id}`,
  });
}
