/*
 * @Author: hcy
 * @Date: 2022-11-28 23:12:30
 * @LastEditors: hcy
 * @LastEditTime: 2022-11-28 23:14:20
 * @FilePath: \src\src\api\myShare\addArticle.ts
 * @Description:添加文章
 *
 */
import request from '../api';

interface data {
  title: string;
  content: string;
}

export function addArticle(data:data) {
  request({
    method: 'post',
    url: '/techqa/add',
    data,
  });
}
