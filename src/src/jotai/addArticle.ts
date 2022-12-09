/*
 * @Author: hcy
 * @Date: 2022-12-08 20:17:57
 * @LastEditors: hcy
 * @LastEditTime: 2022-12-08 20:49:35
 * @FilePath: \src\src\jotai\addArticle.ts
 * @Description: 文章内容
 * 
 * 
 */
import { atom } from 'jotai';

export const msg = atom('');
export const Tags = atom<string[]>([]);
