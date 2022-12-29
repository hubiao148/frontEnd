/*
 * @Author: zyqqun
 * @Date: 2022-12-23 16:35:22
 * @LastEditors: zyqqun 2450100414@qq.com
 * @LastEditTime: 2022-12-29 22:29:41
 * @FilePath: \src\src\api\task\index.ts
 * @Description:学生端的接口
 *
 * Copyright (c) 2022 by zyqqun 2450100414@qq.com, All Rights Reserved.
 */
import request from '../api';

//邀请团队成员 小组长
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

//获取任务列表
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

//删除任务
export function deleteTask(params: number) {
  return request({
    url: `/tasks/missions/task/${params}`,
    method: 'patch',
  });
}

//上传学生的任务
export function uploadTask(data: any) {
  return request({
    url: `/tasks/missions/`,
    method: 'patch',
    data,
  });
}

//搜索任务
export function searchTask(params: any) {
  return request({
    url: `/tasks/missions/search/${params}`,
    method: 'get',
  });
}

//学生工作台数据
export function getCountResult(params: any) {
  return request({
    url: `/tasks/workbench/${params}`,
    method: 'get',
  });
}

//上传老师的任务
export function uploadTTask(data: any) {
  return request({
    url: '',
    method: 'post',
    data,
  });
}
