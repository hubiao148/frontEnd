/*
 * @Author: hcy
 * @Date: 2022-10-04 17:08:52
 * @LastEditors: hcy
 * @LastEditTime: 2022-10-04 17:38:11
 * @FilePath: \src\src\utils\storage.ts
 * @Description: Storage封装
 * 
 */


import configEnv from '@/utils/configEnv';

export default {
  getItem(key: string) {
    return this.getStorage()[key];
  },
  setItem(key: string, val: any) {
    let storage = this.getStorage();

    storage[key] = val;

    window.localStorage.setItem(configEnv.namespace, JSON.stringify(storage));
  },
  getStorage() {
    return JSON.parse(window.localStorage.getItem(configEnv.namespace) || '{}');
  },
  clearItem(key: string) {
    let Storage = this.getStorage();

    delete Storage[key];

    // console.log(Storage);

    window.localStorage.setItem(configEnv.namespace, JSON.stringify(Storage));
  },
  clearAll() {
    window.localStorage.clear();
  },
};
