/*
 * @Author: hcy
 * @Date: 2022-10-05 18:41:55
 * @LastEditors: hcy
 * @LastEditTime: 2022-10-18 16:33:43
 * @FilePath: \src\src\jotai\currentPage.ts
 * @Description: 当前页面
 * 
 */

import { atom } from 'jotai';
import storage from '@/utils/storage'
export const currentPageUser = atom(storage.getItem('currentPageUser') || 0);
export const currentPageHeader = atom(storage.getItem('currentPageHeader') || 0);
export const currentPageMyShare = atom(storage.getItem('currentPageMyShare') || 0);