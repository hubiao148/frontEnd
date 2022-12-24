/*
 * @Author: hcy
 * @Date: 2022-10-31 16:34:32
 * @LastEditors: zyqqun 2450100414@qq.com
 * @LastEditTime: 2022-12-19 22:35:45
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

export function register(data: {
  username: string;
  password: string;
  email?: string;
  phonenumber?: string;
}) {
  return request({
    method: 'post',
    url: '/user/register',
    data,
  });
}

//忘记密码 获取手机验证码验证身份
export function getVerifyCode(params: { mode: number; phonenumber: any }) {
  return request({
    url: '/user/authcode',
    method: 'get',
    params,
  });
}

//忘记密码 验证码验证
export function verifyCode(params: { phonenumber: string; code: number }) {
  return request({
    url: `/user/auth`,
    method: 'get',
    params,
  });
}

//忘记密码 重置密码
export function resetPassword(data: { phonenumber: any; password: any }) {
  return request({
    url: `/user/resetpwd`,
    method: 'post',
    data,
  });
}
