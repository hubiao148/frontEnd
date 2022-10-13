/*
 * @Author: hcy
 * @Date: 2022-10-04 17:08:52
 * @LastEditors: hcy
 * @LastEditTime: 2022-10-13 20:50:16
 * @FilePath: \src\config\routes.ts
 * @Description: 路由
 *
 */

export default [
  // 路由表
  {
    //登录注册页面
    path: '/beforeLogin',
    component: '@/pages/BeforeLogin',
    routes: [
      {
        path: '/beforeLogin/login',
        component: '@/pages/BeforeLogin/components/Login',
      },
      {
        path: '/beforeLogin/register',
        component: '@/pages/BeforeLogin/components/Register',
      },
    ],
  },
  {
    path: '/mask',
    component: '@/pages/maskLayer',
  },
  {
    //主要页面
    path: '/',
    component: '@/layouts',
    routes: [
      { path: '/', redirect: '/home' },
      {
        path: '/home',
        component: '@/pages/Home',
      },
      { path: '/case', component: '@/pages/Case' },
      { path: '/task', component: '@/pages/Task' },
      { 
        path:  '/user',  component:  '@/pages/User' ,
        routes: [
          { path: '/user/usermsgs', component: '@/pages/User/components/UserMsgs' },
          { path: '/user/mycases', component: '@/pages/User/components/MyCases' },
          { path: '/user/myquestions', component: '@/pages/User/components/MyQuestions' },
          { path: '/user/myasks', component: '@/pages/User/components/MyAsks' },
          { path: '/user/myshares', component: '@/pages/User/components/MyShares' },
        ]
      },
      { component: '@/pages/404' },
    ],
  },

  { component: '@/pages/404' },
];
