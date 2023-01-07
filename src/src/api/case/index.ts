/*
 * @Author: zyqqun
 * @Date: 2022-10-24 14:07:15
 * @LastEditors: hcy
 * @LastEditTime: 2023-01-03 10:23:37
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
