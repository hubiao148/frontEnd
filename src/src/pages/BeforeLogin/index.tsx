/*
 * @Author: zyq
 * @Date: 2022-10-05 12:20:04
 * @LastEditors: hcy
 * @LastEditTime: 2022-10-05 14:43:51
 * @FilePath: \src\src\pages\BeforeLogin\index.tsx
 * @Description:
 *
 */
import { useEffect, useState } from 'react';
import styles from './index.less';
import logo from '@/assets/login-side-img.png';
import { Divider } from 'antd';
import { useHistory, history as his } from 'umi';

export default function BeforeLogin(props: any) {
  const path = his.location.pathname;
  const [title, setTitle] = useState('请先登录账号');
  const history = useHistory();
  useEffect(() => {
    history.push('/beforeLogin/login');
    console.log('渲染了');
  }, []);
  function goLogin() {
    history.push('/beforeLogin/login');
    setTitle('请先登录账号');
  }
  function goRegister() {
    history.push('/beforeLogin/register');
    setTitle('请先注册账号');
  }
  return (
    <div className={styles['user-layout-container']}>
      <div className={styles['header']}>LOGO</div>
      <div className={styles['content-container']}>
        <div className={styles['content']}>
          <div className={styles['left']}>
            <img alt="logo" className={styles['logo']} src={logo} />
          </div>
          <div className={styles['right']}>
            <div className={styles['content-header']}>
              <a
                className={`${styles['title']} ${
                  title == '请先登录账号' ? styles['logActive'] : null
                }`}
                onClick={goLogin}
              >
                登录
              </a>
              <a
                className={`${styles['title']} ${
                  title == '请先注册账号' ? styles['regActive'] : null
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
    </div>
  );
}
