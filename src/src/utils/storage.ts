/*
 * @Author: hcy
 * @Date: 2022-10-04 17:08:52
 * @LastEditors: hcy
 * @LastEditTime: 2022-10-05 14:02:36
 * @FilePath: \src\src\utils\storage.ts
 * @Description: Storage封装
 * 
 */


import configEnv from '@/utils/configEnv';

export default {
  getItem(key: string) { //通过索引取localStorage的东西
    return this.getStorage()[key];
  },
  setItem(key: string, val: any) { // 通过索引取和传入的值存进localStorage
    let storage = this.getStorage();
    storage[key] = val;
    window.localStorage.setItem(configEnv.namespace, JSON.stringify(storage));
  },
  getStorage() { //取全部
    return JSON.parse(window.localStorage.getItem(configEnv.namespace) || '{}');
  },
  clearItem(key: string) { //清除对应索引的值
    let Storage = this.getStorage();
    delete Storage[key];
    window.localStorage.setItem(configEnv.namespace, JSON.stringify(Storage));
  },
  clearAll() { //清除全部
    window.localStorage.clear();
  },
};
