/*
 * @Author: hcy
 * @Date: 2022-10-05 15:18:01
 * @LastEditors: hcy
 * @LastEditTime: 2022-10-05 17:58:09
 * @FilePath: \src\src\wrappers\noLogin.tsx
 * @Description: 
 * 访问 /user，就通过 useAuth 做权限校验，如果通过，渲染 src/pages/user，否则跳转到 /
 * login，由 src/pages/login 进行渲染。
 * 
 */

import { Redirect } from 'umi';
import { useAuth } from '@/utils/auth';

export default (props: any) => {
  const { isLogin } = useAuth();
  if (!isLogin) {
    return <div>{props.children}</div>;
  } else {
    return <Redirect to="/beforeLogin" />;
  }
};
