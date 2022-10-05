import React from 'react';
import styles from './UserLayout.less';
import logo from '../../assets/login-side-img.png';
import { Link, NavLink } from 'umi';

export const UserLayout: React.FC = (props) => {
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
              <NavLink className={styles['title']} to={'/beforeLogin/login'}>
                登录
              </NavLink>
              <NavLink to={'/beforeLogin/register'}>注册</NavLink>
            </div>
            <div className={styles['desc']}>请登录账号</div>
            <div>{props.children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
