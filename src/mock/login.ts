/*
 * @Author: hcy
 * @Date: 2022-10-31 18:23:50
 * @LastEditors: hcy
 * @LastEditTime: 2022-11-01 15:27:27
 * @FilePath: \src\mock\login.ts
 * @Description:
 *
 */
export default {
  //登录数据返回
  'POST /umi/login': {
    status: 'success',
    data: {
      token: 'sdsdsds',
      userMsg: {
        userType: '学生',
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
