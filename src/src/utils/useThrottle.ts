/*
 * @Author: zyq
 * @Date: 2022-10-04 15:05:43
 * @Last Modified by: zyq
 * @Last Modified time: 2022-10-04 15:07:25
 */
import { useRef } from 'react';
import { ICurrent } from './useDebounce';
export const useThrottle = (fn: Function, delay = 500) => {
  const { current } = useRef<ICurrent>({ fn, timer: null });
  return function (this: any, ...args: any[]) {
    if (!current.timer) {
      //n秒内一直触发，timer一直为null，就不会执行判断语句中的逻辑（关键）
      current.timer = setTimeout(() => {
        current.fn.apply(this, args).current.timer = null;
      }, delay);
    }
  };
};
