/*
 * @Author: hcy
 * @Date: 2022-10-31 16:34:32
 * @LastEditors: hcy
 * @LastEditTime: 2022-10-31 17:22:56
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

export function getVerifyCode(account: string) {
  return request({
    url: '/verify',
    method: 'get',
    account,
  });
}
