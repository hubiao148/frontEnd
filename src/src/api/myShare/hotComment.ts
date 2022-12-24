/*
 * @Author: hcy
 * @Date: 2022-12-08 19:17:43
 * @LastEditors: hcy
 * @LastEditTime: 2022-12-24 22:26:30
 * @FilePath: \src\src\api\myShare\hotComment.ts
 * @Description:热门评论
 *
 */
import request from '../api';

export function hotComment(orderMode:number) {
  return request({
    method: 'get',
    url: `/techqa/comment/list?orderMode=${orderMode}`,
  });
}
