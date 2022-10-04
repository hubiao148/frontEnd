/*
 * @Author: hcy
 * @Date: 2022-10-04 17:08:52
 * @LastEditors: hcy
 * @LastEditTime: 2022-10-04 19:00:50
 * @FilePath: \src\config\routes.ts
 * @Description: 路由
 * 
 */

export default [
  // 路由表
  { path: '/', component: '@/pages/index' },
  {
    path: '/beforeLogin', component: '@/pages/BeforeLogin',
    routes: [
        { path: '/beforeLogin/login', component: '@/pages/BeforeLogin/components/Login' },
        { path: '/beforeLogin/register', component: '@/pages/BeforeLogin/components/Register' },
    ],
  }, //登录注册页面
  { component: '@/pages/404' },
  
];
