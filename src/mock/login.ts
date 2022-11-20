/*
 * @Author: hcy
 * @Date: 2022-10-31 18:23:50
 * @LastEditors: hcy
 * @LastEditTime: 2022-11-20 20:19:23
 * @FilePath: \src\mock\login.ts
 * @Description:
 *
 */
export default {
  //登录数据返回
  'GET /umi/login': {
    status: 'success',
    code: 200,
    data: {
      token: 'sdsdsds',
      userMsg: {
        userType: '老师',
        name: 'hcy',
        email: '1458283943@qq.com',
      },
    },
  },

  'GET /umi/verify': {
    status: 'success',
    code: 500,
    message: '用户不存在！',
  },
};
