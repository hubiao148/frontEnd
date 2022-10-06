/*
 * @Author: hcy
 * @Date: 2022-10-05 11:52:12
 * @LastEditors: hcy
 * @LastEditTime: 2022-10-05 21:30:11
 * @FilePath: \src\src\components\Header\index.tsx
 * @Description: 头部
 *
 */
import { useEffect, useState } from 'react';
import { useHistory } from 'umi';
import { BellOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Avatar, Badge, Button, Dropdown, Menu as Menun } from 'antd';
import { useAuth } from '@/utils/auth';
import Menu from './components/Menu';
import style from './index.less';
import storage from '@/utils/storage';

export default () => {
  const menu = (
    <Menun
      items={[
        {
          key: '1',
          label: <span onClick={goLogout}>登出</span>,
        },
      ]}
    />
  );
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    //刷新页面钩子函数
    refresh && setTimeout(() => setRefresh(false));
  }, [refresh]);

  const history = useHistory();
  const { isLogin } = useAuth(); //判断受否登录
  function goLogin() {
    history.push('/beforeLogin');
  }
  function goLogout() {
    storage.clearItem('token');
    setRefresh(!refresh);
  }

  return (
    <div className={style.header}>
      <div className={style.menu}>logo</div>
      <Menu></Menu>
      <div className={style.headerAvatar}>
        {isLogin && (
          <Badge count={1000}>
            {' '}
            {/**通过isLogin变量动态渲染按钮 */}
            <Avatar icon={<BellOutlined />} />
          </Badge>
        )}
        {!isLogin && <Button onClick={goLogin}>登录/注册</Button>}
        {isLogin && (
          <Dropdown
            overlay={menu}
            placement="bottomRight"
            arrow={{ pointAtCenter: true }}
          >
            <Avatar
              src="https://joeschmoe.io/api/v1/random"
              style={{ width: 32, cursor: 'pointer' }}
            />
          </Dropdown>
        )}
        <UnorderedListOutlined />
      </div>
    </div>
  );
};
