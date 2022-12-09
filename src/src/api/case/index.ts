/*
 * @Author: zyqqun
 * @Date: 2022-10-24 14:07:15
 * @LastEditors: zyqqun 2450100414@qq.com
 * @LastEditTime: 2022-12-08 14:22:34
 * @FilePath: \src\src\api\case\index.ts
 * @Description:
 *
 * Copyright (c) 2022 by zyqqun 2450100414@qq.com, All Rights Reserved.
 */
import request from '../api';
// 获取设计模式信息
export function getModeList() {
  return request({
    url: '/modeList',
    method: 'get',
  });
}

// 获取设计模式详情信息
export function getModeDetail() {
  return request({
    url: '/modeDetail',
    method: 'get',
  });
}

// 获取开源项目左侧导航栏
export function getNavigation() {
  return request({
    url: '/openProject/navigation',
    method: 'get',
  });
}

// 获取技术分享左侧导航栏
export function getShareNavigation() {
  return request({
    url: '/techShare/navigation',
    method: 'get',
  });
}

// 获取开源项目信息列表
export function getProjectList(params?: string) {
  return request({
    url: `/openProject/projectList${params}`,
    method: 'get',
    params,
  });
}

// 获取开源项目信息列表
export function getShareList(params?: string) {
  return request({
    url: `/techShare/shareList${params}`,
    method: 'get',
    params,
  });
}
