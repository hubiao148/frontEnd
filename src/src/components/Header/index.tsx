/*
 * @Author: hcy
 * @Date: 2022-10-05 11:52:12
 * @LastEditors: hcy
 * @LastEditTime: 2022-12-10 18:08:34
 * @FilePath: \src\src\components\Header\index.tsx
 * @Description: 头部
 *
 */
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'umi';
import { BellOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Avatar, Badge, Button, Dropdown, Menu as Menun, Modal } from 'antd';
import { useAuth } from '@/utils/auth';
import Menu from './components/Menu';
import style from './index.less';
import storage from '@/utils/storage';
import MaskLayer from './components/maskLayer';
import { currentPageHeader } from '@/jotai';
import { useAtom } from 'jotai';
export default () => {
  const [page, setPage] = useAtom(currentPageHeader);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const listMenu = storage.getItem('token')
    ? [
      { path: '/home', title: '首页' },
      { path: '/myshare', title: '技术问答' },
      { path: '/case', title: '实践案例' },
      { path: '/task', title: '实践任务' },
      { path: '/user', title: '个人空间' },
    ]
    : [
      { path: '/home', title: '首页' },
      { path: '/myshare', title: '技术问答' },
      { path: '/case', title: '实践案例' },
      { path: '/task', title: '实践任务' },
    ];

  const id = 'Header';
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
  const menu2 = (
    <Menun
      items={[
        {
          key: '1',
          label: <Link to="/message">评论</Link>,
        },
        {
          key: '2',
          label: <Link to="/message">老师回复</Link>,
        },
        {
          key: '3',
          label: <Link to="/message">系统消息</Link>,
        },
      ]}
    />
  );

  useEffect(() => {
    //刷新页面钩子函数
    refresh && setTimeout(() => setRefresh(false));
  }, [refresh]);

  const history = useHistory();
  const { isLogin } = useAuth(); //判断是否登录
  function goLogin() {
    history.push('/beforeLogin/login');
  }
  function goLogout() {
    storage.clearAll();
    history.replace('/home');
    setPage(0);
    setRefresh(!refresh);
  }

  return (
    <div className={style.header}>
      <div className={style.logo}>logo</div>
      <Menu id={id} listMenu={listMenu}></Menu>
      <div className={style.headerAvatar}>
        {isLogin && (
          <Badge count={1000}>
            {/**通过isLogin变量动态渲染按钮 */}
            <Dropdown
              overlay={menu2}
              placement="bottomRight"
              arrow={{ pointAtCenter: true }}
            >
              <BellOutlined className={style.message} />
            </Dropdown>
            {/* <Avatar
              // icon={<BellOutlined />}
              className={style.Badge}
              size={{ xs: 24, sm: 32, md: 40, lg: 40, xl: 40, xxl: 40 }}
            /> */}
          </Badge>
        )}
        {!isLogin && (
          <Button
            size={window.innerWidth > 750 ? 'large' : 'small'}
            onClick={goLogin}
          >
            登录/注册
          </Button>
        )}
        {isLogin && (
          <Dropdown
            overlay={menu}
            placement="bottomRight"
            arrow={{ pointAtCenter: true }}
            className={style.Dropdown}
          >
            <Avatar
              src="https://joeschmoe.io/api/v1/random"
              style={{ cursor: 'pointer' }}
              size={{ xs: 24, sm: 32, md: 40, lg: 40, xl: 40, xxl: 40 }}
            />
          </Dropdown>
        )}
        {/* 遮罩层实现 */}
        <UnorderedListOutlined onClick={showModal} className={style.icon} />
        <Modal
          closable={false}
          footer={null}
          width="100vw"
          style={{
            maxWidth: '100vw',
            top: 0,
            paddingBottom: 0,
          }}
          bodyStyle={{ height: '100vh' }}
          open={isModalOpen}
        >
          <MaskLayer
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        </Modal>
      </div>
    </div>
  );
};
