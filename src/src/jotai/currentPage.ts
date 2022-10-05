/*
 * @Author: hcy
 * @Date: 2022-10-05 18:41:55
 * @LastEditors: hcy
 * @LastEditTime: 2022-10-05 19:04:43
 * @FilePath: \src\src\jotai\currentPage.ts
 * @Description: 当前页面
 * 
 */

import { atom } from 'jotai';
import storage from '@/utils/storage'

export const currentPage = atom(storage.getItem('currentPage') || 0);