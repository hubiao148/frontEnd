/*
 * @Author: hcy
 * @Date: 2022-10-31 18:23:50
 * @LastEditors: zyqqun 2450100414@qq.com
 * @LastEditTime: 2022-12-09 17:02:11
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
        userType: '学生',
        name: 'hcy',
        email: '1458283943@qq.com',
      },
    },
  },

  'GET /umi/verify': {
    status: 'success',
    code: 200,
    message: '用户不存在！',
  },
};
