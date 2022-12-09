/*
 * @Author: hcy
 * @Date: 2022-12-06 20:30:43
 * @LastEditors: hcy
 * @LastEditTime: 2022-12-08 19:14:31
 * @FilePath: \src\src\api\myShare\addComment.ts
 * @Description:添加评论
 *
 */
import request from '../api';

export function addComment(
  techqaId: number, // 文章id
  userId: number , // 文章所有者id
  data: {
    content: string;
    entityType: number;
    entityId: number; // 评论者id
  },
) {
  return request({
    method: 'post',
    url: `/techqa/comment/add/${techqaId}/${userId}`,
    data,
  });
}
