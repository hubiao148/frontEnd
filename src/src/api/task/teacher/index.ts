/*
 * @Author: hcy
 * @Date: 2022-10-04 17:08:52
 * @LastEditors: hcy
 * @LastEditTime: 2022-12-30 16:54:56
 * @FilePath: \src\src\api\task\teacher\index.ts
 * @Description: 实践任务老师板块
 *
 */

import request from '@/api/api';

/**
 * 查询所有小组
 * @returns 
 */
export function queryAllGroup() {
  return request({
    url: "/tasks/projects/teams",
    method: 'get',
  });
}

/**
 * 根据id查询小组
 * @param id
 * @returns
 */
export function queryGroupByClassId(id: number) {
  return request({
    url: `/tasks/projects/teams/${id}`,
    method: 'get',
  });
}

/***
 * 查询小组列表
 */
export function queryGroupList() {
  return request({
    url: '/tasks/projects/teams/1',
    method: 'get',
  });
}
/**
 * 通过id查询小组任务
 * @param id
 * @returns
 */

export function queryGroupTaskById(id: number) {
  return request({
    url: `tasks/missions/list/${id}`,
    method: 'get',
  });
}
/**
 * 根据年级查小组
 * @param id
 * @returns
 */

export function queryGroupByGradeId(id: number) {
  return request({
    url: `tasks/class/list/${id}`,
    method: 'get',
  });
}
/**
 * 根据id 查小组
 * @param id 
 * @returns 
 */
export function queryGroupByGradeIds(id:number) {
  return request({
    url: `/tasks/grade/${id}`,
    method: 'get',
  });
}
/**
 * 根据id查任务
 * @param id 任务id
 * @param sta id状态 0学生的 1老师的
 * @returns
 */
export function queryTaskDetailById(id: number, sta: number) {
  return request({
    url: `tasks/missions/info/${id}/${sta}`,
    method: 'get',
  });
}

/**
 * 任务状态
 * @param id 
 * @param sta 
 * @returns 
 */
export function checkStateChange(id:number,sta:number) {
    return request({
        url: `tasks/missions/check/${id}/${sta}`,
        method:'post',
    });
}
/**
 * 根据id删除小组
 * @param id 
 * @returns 
 */
export function deleteGroupById(id:number) {
  return request({
    url: `/tasks/projects/delete/${id}`,
    method:'post'
  });
}

/**
 * 查询小组信息
 * @param id 
 * @returns 
 */
export function queryGroupDetailById(id:number) {
  return request({
    url: `/tasks/projects/members/${id}`,
    method:'get'
  });
}
/**
 * 通过id删除成员
 * @param id 
 * @returns 
 */
export function deleteMemberById(id:number) {
  return request({
    url: `/tasks/projects/teams/${id}`,
    method:'patch',
  });
}

/**
 * 老师创建任务
 * @param data 
 * @returns 
 */
export function createTaskByTeaher(data:any) {
  return request({
    url: '/tasks/missions/ttask',
    method: 'post',
    data
  })
}

/**
 * 删除任务
 * @param id 
 * @returns 
 */
export function deleteTaskById(id: number) {
  return request({
    url: `/tasks/missions/ttask/${id}`,
    method: 'patch',
  });
}
/**
 * 添加班级
 * @param data 
 * @returns 
 */
export function addClass(data:any) {
  return request({
    url: '/tasks/class',
    method: 'post',
    data
  });
}