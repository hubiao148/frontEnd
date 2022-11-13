/*
 * @Author: hcy
 * @Date: 2022-10-31 16:34:32
 * @LastEditors: zyqqun 2450100414@qq.com
 * @LastEditTime: 2022-11-13 19:25:42
 * @FilePath: \src\src\api\login\BeforeLogin.ts
 * @Description:
 *
 */
import request from '../api';
export function BeforeLoginRequest(data: {
  phonenumber: string;
  password: string;
}) {
  return request({
    url: '/user/login',
    data,
    method: 'post',
  });
}
//忘记密码 获取手机验证码验证身份
export function getVerifyCode(params: string) {
  return request({
    url: '/verify',
    method: 'get',
    params,
  });
}
