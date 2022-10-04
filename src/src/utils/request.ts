/*
 * @Author: hcy
 * @Date: 2022-10-04 17:08:52
 * @LastEditors: hcy
 * @LastEditTime: 2022-10-04 17:37:55
 * @FilePath: \src\src\utils\request.ts
 * @Description: 请求接口
 * 
 */

import {
	get,
	post
} from '../api/api'


export const index = (params:object) => get('/api/index',params)

