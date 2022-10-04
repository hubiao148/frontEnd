/***
 *
 * Storage封装
 * @auth hcy
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
