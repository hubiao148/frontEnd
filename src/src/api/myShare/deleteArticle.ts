/*
 * @Author: hcy
 * @Date: 2022-11-28 23:14:56
 * @LastEditors: hcy
 * @LastEditTime: 2022-11-28 23:18:36
 * @FilePath: \src\src\api\myShare\deleteArticle.ts
 * @Description:删除文章
 *
 */
import request from '../api';

export function deleteArticle(id:number) {
  request({
    method: 'delete',
    url: `/techqa/${id}`,
  });
}
