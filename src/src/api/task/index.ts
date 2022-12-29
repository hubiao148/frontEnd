/*
 * @Author: zyqqun
 * @Date: 2022-12-23 16:35:22
 * @LastEditors: zyqqun 2450100414@qq.com
 * @LastEditTime: 2022-12-23 16:42:28
 * @FilePath: \src\src\api\task\index.ts
 * @Description:
 *
 * Copyright (c) 2022 by zyqqun 2450100414@qq.com, All Rights Reserved.
 */
import request from '../api';

// 创建项目
export function createProject(data: any) {
  return request({
    url: '',
    method: 'post',
    data,
  });
}

// 创建团队
export function createTeam(data: any) {
  return request({
    url: '',
    method: 'post',
    data,
  });
}
