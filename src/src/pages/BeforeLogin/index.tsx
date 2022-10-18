/*
 * @Author: zyq
 * @Date: 2022-10-05 12:20:04
 * @LastEditors: hcy
 * @LastEditTime: 2022-10-11 21:13:21
 * @FilePath: \src\src\pages\BeforeLogin\index.tsx
 * @Description:
 *
 */
import styles from './index.less';
import logo from '@/assets/login-side-img.png';
import { Divider } from 'antd';
import storage from '@/utils/storage';
import { useHistory, history as his } from 'umi';
import { atom, useAtom } from 'jotai';
import { useEffect } from 'react';
export const titleAtom = atom(storage.getItem('title') || '请登录账号');

export default function BeforeLogin(props: any) {
  const [title, setTitle] = useAtom(titleAtom);
  const history = useHistory();
  useEffect(() => {
    if (title === '注册账号') {
      history.push('/beforeLogin/register');
    }
  }, []);
  function goLogin() {
    setTitle('请登录账号');
    console.log(title);
    storage.setItem('title', '请登录账号');
    history.push('/beforeLogin/login');
  }
  function goRegister() {
    setTitle('注册账号');
    console.log(title);
    storage.setItem('title', '注册账号');
    history.push('/beforeLogin/register');
  }
  return (
    <div className={styles['user-layout-container']}>
      <div className={styles['header']}>LOGO</div>
      <div className={styles['content']}>
        <div className={styles['left']}>
          <img alt="logo" className={styles['logo']} src={logo} />
        </div>
        <div className={styles['right']}>
          <div className={styles['content-header']}>
            <a
              className={`${styles['title']} ${
                title == '请登录账号' ? styles['logActive'] : null
              }`}
              onClick={goLogin}
            >
              登录
            </a>
            <a
              className={`${styles['title']} ${
                title == '注册账号' ? styles['regActive'] : null
              }`}
              onClick={goRegister}
            >
              注册
            </a>
          </div>
          <Divider style={{ margin: '0px' }}></Divider>
          <div className={styles['desc']}>{title}</div>
          <div>{props.children}</div>
        </div>
      </div>
    </div>
  );
}
