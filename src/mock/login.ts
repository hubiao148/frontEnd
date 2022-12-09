/*
 * @Author: hcy
 * @Date: 2022-10-31 18:23:50
 * @LastEditors: hcy
 * @LastEditTime: 2022-12-05 18:27:17
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
      token:
        'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI2ZmQ1MzEzYTczOTY0YzBjYjkxYjY0NDk0ZWM1NDZlMCIsInN1YiI6IjEiLCJpc3MiOiJzZyIsImlhdCI6MTY3MDIyODE2NiwiZXhwIjoxNjcyODIwMTY2fQ.twF6sEHouq5Ov7bvO_NHazGLfwd1ttCkK6hIf-dRNrY',
      userMsg: {
        userType: '学生',
        name: 'hcy',
        email: '1458283943@qq.com',
        phoneNum: '19980825396',
      },
    },
  },

  'GET /umi/verify': {
    status: 'success',
    code: 500,
    message: '用户不存在！',
  },
};
