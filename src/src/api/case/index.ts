/*
 * @Author: zyqqun
 * @Date: 2022-10-24 14:07:15
<<<<<<< HEAD
 * @LastEditors: zyqqun 2450100414@qq.com
 * @LastEditTime: 2022-12-24 23:49:18
=======
 * @LastEditors: hcy
 * @LastEditTime: 2022-12-12 19:54:36
>>>>>>> edfe9a27a3f7d89024d38b889bda7a78fc5f1b7a
 * @FilePath: \src\src\api\case\index.ts
 * @Description:
 *
 * Copyright (c) 2022 by zyqqun 2450100414@qq.com, All Rights Reserved.
 */
import request from '../api';
// 获取设计模式信息
export function getModeList() {
  return request({
    //url: '/modeList',
    url: '/examples/designcase/list',
    method: 'get',
  });
}

// 获取设计模式详情信息
export function getModeDetail(id: number) {
  return request({
    // url: '/modeDetail',
    url: `/examples/designcase/details/${id}`,
    method: 'get',
  });
}

// 获取开源项目左侧导航栏
export function getNavigation() {
  return request({
    url: `examples/osp/kinds`,
    method: 'get',
  });
}

// 获取开源项目信息列表
export function getProjectList(params?: string) {
  return request({
    url: `examples/osp/kinds/${params}`,
    method: 'get',
    params,
  });
}

// 搜索开源项目信息列表
export function SearchProjectList(params?: string) {
  return request({
    url: `examples/osp/search/${params}`,
    method: 'get',
    params,
  });
}

// 添加技术分享

export function addDesignMode(data: any) {
  console.log(data.files.get('file'));
  return request({
    url: '/techshare/designmode/add',
    method: 'post',
    data,
    Headers: { 'Content-Type': 'multipart/form-data' },
  });
}
