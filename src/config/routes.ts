/*
 * @Author: hcy
 * @Date: 2022-10-04 17:08:52
 * @LastEditors: hcy
 * @LastEditTime: 2022-12-30 11:24:06
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
      // 登录
      {
        path: '/beforeLogin/login',
        component: '@/pages/BeforeLogin/components/Login',
      },
      // 注册
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
    // 提问
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
        // 主页
        path: '/home',
        component: '@/pages/Home',
      },
      {
        // 搜索
        path: '/search',
        component: '@/pages/Search',
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
          //小组任务
          {
            path: '/task/groupTaskList',
            component: '@/pages/Task/components/Manage',
          },
          {
            //任务管理
            path: '/task/taskManage/:id',
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
            //创建班级
            path: '/task/createClass',
            component: '@/pages/Task/components/CreateClass',
          },
          {
            // 查看任务
            path: '/task/lookTask/:id/:sta',
            component: '@/pages/Task/components/LookTask',
          },
          {
            // 上传任务
            path: '/task/loadTask',
            component: '@/pages/Task/components/LoadTask',
          },
          {
            // 小组详情
            path: '/task/groupDetail/:id',
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
            // 主页
            path: '/myshare',
            redirect: '/myshare/latest',
          },
          {
            // 最新
            path: '/myshare/latest',
            component: '@/pages/myShare/components/Latest',
          },
          {
            // 回复
            path: '/myshare/reply',
            component: '@/pages/myShare/components/Reply',
          },
          {
            // 月榜
            path: '/myshare/mouth',
            component: '@/pages/myShare/components/Mouth',
          },
          {
            // 周榜
            path: '/myshare/week',
            component: '@/pages/myShare/components/Week',
          },
        ],
      },
      {
        // 我的分享详情
        path: '/details/:id',
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
            // 用户信息
            path: '/user/usermsgs',
            component: '@/pages/User/components/UserMsgs',
          },
          {
            // 我收藏的案例
            path: '/user/mycases',
            component: '@/pages/User/components/MyCases',
          },
          {
            // 我的回答
            path: '/user/myquestions',
            component: '@/pages/User/components/MyQuestions',
          },
          // 我的提问
          { path: '/user/myasks', component: '@/pages/User/components/MyAsks' },
          {
            // 我收藏的提问
            path: '/user/myshares',
            component: '@/pages/User/components/MyShares',
          },
        ],
      },
      // 404界面
      { component: '@/pages/404' },
    ],
  },

  { component: '@/pages/404' },
];
