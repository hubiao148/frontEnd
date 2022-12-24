/*
 * @Author: hcy
 * @Date: 2022-12-24 18:58:15
 * @LastEditors: hcy
 * @LastEditTime: 2022-12-24 20:55:15
 * @FilePath: \src\src\api\user\index.ts
 * @Description:个人中心
 *
 */

import request from "../api";

/**
 * 通过id查用户信息
 * @param id 
 * @returns 
 */
export function queryMsgById(id:number) {
    return request({
        url: `/person/${id}`,
        method:'get'
    });
}

/**
 * 收藏案例
 * @param id 
 * @param mode 0:技术问答、1：设计模式案例、2：场景设计 
 * @returns 
 */
export function queryCollectionById(mode: number, userId:number) {
  return request({
    url: `/person/colloction/${userId}/${mode}`,
    method: 'get',
  });
}
/**
 * 查询我发布问答
 * @returns 
 */
export function queryMyTechqa(userId:number) {
    return request({
      url: `/person/mytechqa/${userId}`,
      method: 'get',
    });
}

/**
 * 查询我回答的问答
 * @returns 
 */
export function queryMytechqaReply(userId:number) {
  return request({
    url: `/person/mytechqareply/${userId}`,
    method: 'get',
  });
}