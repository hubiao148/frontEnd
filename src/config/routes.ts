/*
 * @Author: hcy
 * @Date: 2022-10-04 17:08:52
 * @LastEditors: hcy
 * @LastEditTime: 2022-11-26 14:34:33
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
    //忘记密码
    path: '/forgetPassword',
    component: '@/pages/forgetPassword',
  },
  {
    path: '/askquestion',
    component: '@/pages/AskQuestion',
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
      {
        path: '/message',
        component: '@/pages/Message',
      },
      {
        //实践案例
        path: '/case',
        component: '@/pages/Case', //设计模式
      },
      {
        //设计模式详情
        path: '/modeDetail/:id',
        component: '@/pages/Case/components/modeDetail',
      },
      {
        //技术分享
        path: '/techShare',
        component: '@/pages/techShare',
        // routes: [
        //   {
        //     path: '/techShare',
        //     redirect: '/techShare/techFront',
        //   },
        //   {
        //     path: '/techShare/techFront',
        //     component: '@/pages/techShare/components/techFront',
        //   },
        //   {
        //     path: '/techShare/techEnd',
        //     component: '@/pages/techShare/components/techEnd',
        //   },
        //   {
        //     path: '/techShare/techGame',
        //     component: '@/pages/techShare/components/techGame',
        //   },
        //   {
        //     path: '/techShare/techOther',
        //     component: '@/pages/techShare/components/techOther',
        //   },
        // ],
      },

      {
        path: '/task',
        component: '@/pages/Task',
        routes: [
          {
            path: '/task/',
            redirect: '/task/staging',
          },
          {
            path: '/task/staging',
            component: '@/pages/Task/components/Staging',
          },
          {
            path: '/task/manage',
            component: '@/pages/Task/components/Manage',
          },
          {
            //任务管理
            path: '/task/taskManage',
            component: '@/pages/Task/components/TaskManage',
          },
          {
            //任务管理学生
            path: '/task/taskList',
            component: '@/pages/Task/components/TaskList',
          },
          {
            //加入团队
            path: '/task/joinTeam',
            component: '@/pages/Task/components/JoinTeam',
          },
          {
            // 邀请团队成员
            path: '/task/inviteMember',
            component: '@/pages/Task/components/InviteMember',
          },
          {
            //创建团队
            path: '/task/createTeam',
            component: '@/pages/Task/components/CreateTeam',
          },
          {
            //创建任务
            path: '/task/createTask',
            component: '@/pages/Task/components/CreateTask',
          },
          {
            //创建项目
            path: '/task/createProject',
            component: '@/pages/Task/components/CreateProject',
          },
          {
            //创建班级
            path: '/task/createClass',
            component: '@/pages/Task/components/CreateClass',
          },
          {
            path: '/task/lookTask',
            component: '@/pages/Task/components/LookTask',
          },
          {
            path: '/task/loadTask',
            component: '@/pages/Task/components/LoadTask',
          },
          {
            path: '/task/groupDetail',
            component:
              '@/pages/Task/components/Staging/components/StagingTeacher/GroupList',
          },
        ],
      },
      {
        //我的分享问答界面
        path: '/myshare',
        component: '@/pages/myShare',
        routes: [
          {
            path: '/myshare',
            redirect: '/myshare/latest',
          },
          {
            path: '/myshare/latest',
            component: '@/pages/myShare/components/Latest',
          },
          {
            path: '/myshare/reply',
            component: '@/pages/myShare/components/Reply',
          },
          {
            path: '/myshare/mouth',
            component: '@/pages/myShare/components/Mouth',
          },
          {
            path: '/myshare/week',
            component: '@/pages/myShare/components/Week',
          },
        ],
      },
      {
        path: '/details',
        component: '@/pages/myShare/components/QuestionDetails',
      },

      {
        //个人中心
        path: '/user',
        component: '@/pages/User',
        routes: [
          {
            path: '/user',
            redirect: '/user/usermsgs',
          },
          {
            path: '/user/usermsgs',
            component: '@/pages/User/components/UserMsgs',
          },
          {
            path: '/user/mycases',
            component: '@/pages/User/components/MyCases',
          },
          {
            path: '/user/myquestions',
            component: '@/pages/User/components/MyQuestions',
          },
          { path: '/user/myasks', component: '@/pages/User/components/MyAsks' },
          {
            path: '/user/myshares',
            component: '@/pages/User/components/MyShares',
          },
        ],
      },

      { component: '@/pages/404' },
    ],
  },

  { component: '@/pages/404' },
];
