/*
 * @Author: hcy
 * @Date: 2022-10-05 15:20:18
 * @LastEditors: hcy
 * @LastEditTime: 2022-10-05 15:20:23
 * @FilePath: \src\src\utils\auth.ts
 * @Description: 
 * 
 */
// 判断用户是否登录
export function useAuth() {
  const isLogin = localStorage.getItem('token') !== null;
  return {
    isLogin,
  };
}
