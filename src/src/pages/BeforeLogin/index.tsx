/*
 * @Author: hcy
 * @Date: 2022-10-04 17:08:52
 * @LastEditors: hcy
 * @LastEditTime: 2022-10-04 18:55:52
 * @FilePath: \src\src\pages\BeforeLogin\index.tsx
 * @Description: 注册&&登录
 *
 */
import React from 'react';
import { useHistory } from 'umi';
import { Button } from 'antd';
import Login from './components/Login';
import Registe from './components/Register';
function BeforeLogin(props: any) {
  const history = useHistory();
  function goLogin() {
    history.push('/beforeLogin/login');
  }
  function goRegister() {
    history.push('/beforeLogin/register');
  }
  return (
    <div>
      <div>
        <div>
          <Button onClick={goLogin}>登录</Button>
          <Button onClick={goRegister}>注册</Button>
        </div>
        <div>{props.children}</div>
      </div>
    </div>
  );
}

export default BeforeLogin;
