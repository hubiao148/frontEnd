/*
 * @Author: zyqqun
 * @Date: 2022-12-08 21:39:26
 * @LastEditors: zyqqun 2450100414@qq.com
 * @LastEditTime: 2022-12-24 21:58:58
 * @FilePath: \src\src\api\techShare\index.ts
 * @Description:
 *
 * Copyright (c) 2022 by zyqqun 2450100414@qq.com, All Rights Reserved.
 */
import request from '../api';

// 获取设计模式信息
export function getShareNavigation() {
  return request({
    url: '/techshare/scene/list',
    method: 'get',
  });
}

export function uploadTeach(data: any) {
  return request({
    url: '/techshare/designmode/add',
    //url: '/file/up',
    method: 'post',
    data,
    // headers: {
    //   'Content-Type': 'multipart/form-data;boundary = ' + new Date().getTime(),
    // },
    // headers: {
    //   'Content-Type': 'application/octet-stream', // 重点2
    // },
    //responseType: 'blob', //重点3
  });
}

export function getTeachShareList(params: any) {
  return request({
    url: `/techshare/designmode/list/${params}`,
    method: 'get',
  });
}
