/*
 * @Author: hcy
 * @Date: 2022-12-08 19:46:30
 * @LastEditors: hcy
 * @LastEditTime: 2022-12-08 19:49:35
 * @FilePath: \src\src\api\myShare\markdownFileUPload.ts
 * @Description:markdwon图片上传
 *
 */
import request from '../api';

export function markdownFileUPload(data:any) {
  return request({
    method: 'post',
    url: '/api/file/upload',
    data,
    Headers: { 'Content-Type': 'multipart/form-data' },
  });
}
