/*
 * @Author: hcy
 * @Date: 2022-12-24 22:19:08
 * @LastEditors: hcy
 * @LastEditTime: 2022-12-24 22:23:22
 * @FilePath: \src\src\api\myShare\hotTag.ts
 * @Description:热门标签
 *
 */
import request from '../api';
/**
 * 查询最热
 * @param orderMode ordermodel=0、1-最新、最热
 * @returns 
 */
export function hotTags(orderMode:number) {
  return request({
    method: 'get',
    url: `/techqa/topic/list?orderMode=${orderMode}`,
  });
}