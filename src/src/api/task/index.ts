/*
 * @Author: zyqqun
 * @Date: 2022-12-23 16:35:22
 * @LastEditors: zyqqun 2450100414@qq.com
 * @LastEditTime: 2022-12-25 21:15:06
 * @FilePath: \src\src\api\task\index.ts
 * @Description:
 *
 * Copyright (c) 2022 by zyqqun 2450100414@qq.com, All Rights Reserved.
 */
import request from '../api';

// 创建项目
export function getInviteCode(params: any) {
  return request({
    url: `/tasks/projects/code/${params}`,
    method: 'get',
  });
}

// 创建团队
export function createTeam(data: {
  classId: number;
  gitUrl: string;
  groupName: number;
  introduction: string;
  leaderId: number;
  projectName: string;
}) {
  return request({
    url: '/tasks/projects',
    method: 'post',
    data,
  });
}

//加入团队
export function joinTeam(data: { teamCode: string; userID: number }) {
  return request({
    url: `/tasks/projects/teams/${data.teamCode}/${data.userID}`,
    method: 'patch',
    data,
  });
}

//获取groupId
export function getGroupId(params: any) {
  return request({
    url: `/user/${params}`,
    method: 'get',
  });
}

export function getMissionList(params: any) {
  return request({
    url: `/tasks/missions/list/${params}`,
    method: 'get',
  });
}

//创建任务
export function createTask(data: {
  taskName: string;
  deadline: any;
  groupId: number | undefined;
}) {
  return request({
    url: '/tasks/missions/task',
    method: 'post',
    data,
  });
}

export function deleteTask(params: number) {
  return request({
    url: `/tasks/missions/task/${params}`,
    method: 'patch',
  });
}

export function uploadTask(data: any) {
  return request({
    url: `/tasks/missions/`,
    method: 'patch',
    data,
  });
}

export function searchTask(params: any) {
  return request({
    url: `/tasks/missions/search/${params}`,
    method: 'get',
  });
}

export function getCountResult(params: any) {
  return request({
    url: `/tasks/workbench/${params}`,
    method: 'get',
  });
}
