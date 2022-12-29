/*
 * @Author: zyqqun
 * @Date: 2022-12-20 19:32:36
 * @LastEditors: zyqqun 2450100414@qq.com
 * @LastEditTime: 2022-12-24 21:00:56
 * @FilePath: \src\src\api\message\index.ts
 * @Description:
 *
 * Copyright (c) 2022 by zyqqun 2450100414@qq.com, All Rights Reserved.
 */
import request from '../api';

export function getMessage(params: { userId: any; topic: any }) {
  return request({
    url: `/notice/detail/1/${params.topic}`,
    method: 'get',
    // params,
  });
}
