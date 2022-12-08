/*
 * @Author: hcy
 * @Date: 2022-10-31 16:34:32
 * @LastEditors: hcy
 * @LastEditTime: 2022-11-29 17:15:39
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

export function register(data: {
  username: string;
  password: string;
  email: string;
  sex: number;
  phonenumber: string;
  
}) {
  return request({
    method: 'post',
    url: '/user/register',
    data,
  });
}
