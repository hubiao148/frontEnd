/*
 * @Author: hcy
 * @Date: 2022-10-04 17:08:52
 * @LastEditors: hcy
 * @LastEditTime: 2022-10-05 14:03:29
 * @FilePath: \src\config\routes.ts
 * @Description: 路由
 * 
 */

export default [
  // 路由表
  {//登录注册页面
        path: '/beforeLogin', component: '@/pages/BeforeLogin',
        routes: [
            { path: '/beforeLogin/login', component: '@/pages/BeforeLogin/components/Login' },
            { path: '/beforeLogin/register', component: '@/pages/BeforeLogin/components/Register' },
        ],
  }, 
  
  {//主要页面
    path: '/',
    component: '@/layouts',
    routes: [
      {path:'/',redirect:'/home'},
      { path: '/home', component: '@/pages/Home' },
      { component: '@/pages/404' },
    ]
  
  },
  
  
];
