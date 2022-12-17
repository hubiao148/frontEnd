/*
 * @Author: zyqqun
 * @Date: 2022-12-08 21:39:26
 * @LastEditors: zyqqun 2450100414@qq.com
 * @LastEditTime: 2022-12-12 19:15:52
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

// export function uploadTeach(data: { files: any[]; sceneDesign: {} }) {
//   return request({
//     url: '/techshare/designmode/add',
//     method: 'post',
//     data,
//   });
// }

export function uploadTeach(data: any) {
  return request({
    url: '/techshare/designmode/add',
    method: 'post',
    data,
    Headers: { 'Content-Type': 'multipart/form-data' },
  });
}
