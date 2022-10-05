/*
 * @Author: hcy
 * @Date: 2022-10-05 15:20:18
 * @LastEditors: hcy
 * @LastEditTime: 2022-10-05 20:53:55
 * @FilePath: \src\src\utils\auth.ts
 * @Description: 
 * 
 */
// 判断用户是否登录
import storage from "./storage";
export function useAuth() {
  const isLogin = storage.getItem('token') !== undefined;
  return {
    isLogin,
  };
}
