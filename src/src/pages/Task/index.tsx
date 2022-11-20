/*
 * @Author: hcy
 * @Date: 2022-10-06 18:46:12
 * @LastEditors: zyqqun 2450100414@qq.com
 * @LastEditTime: 2022-11-16 10:50:51
 * @FilePath: \src\src\pages\Task\index.tsx
 * @Description: 实践任务
 *
 */
import storage from '@/utils/storage';
import { DesktopOutlined, TeamOutlined } from '@ant-design/icons';
import { Layout, Button, Menu } from 'antd';
import { useState } from 'react';
import { useHistory } from 'umi';
const { Content, Sider } = Layout;
import style from './index.less';
export default function Task(props: any) {
  const history = useHistory();
  const siderTopMenu = [
    {
      toptitle: '您的学生',
      title: '创建项目',
      path: '/task/createProject',
    },
    {
      toptitle: '您的学生',
      title: '创建团队',
      path: '/task/createTeam',
    },
    {
      toptitle: '您的学生',
      title: '邀请团队成员',
      path: '/task/inviteMember',
    },
    {
      toptitle: '您的学生',
      title: '加入团队',
      path: '/task/joinTeam',
    },
  ];
  const items = [
    {
      key: '/task/staging',
      label: '工作台',
      icon: <DesktopOutlined />,
    },
    {
      key: '/task/manage',
      label: '项目管理',
      icon: <DesktopOutlined />,
    },
    {
      key: '/task/taskManage',
      label: '任务管理',
      icon: <DesktopOutlined />,
    },
    {
      key: '/task/createTask',
      label: '创建任务',
      icon: <DesktopOutlined />,
    },
  ];
  function gotoItem(e: any) {
    history.push(e.key);
  }
  return (
    <div className={style.container}>
      {storage.getItem('token') ? (
        <Layout>
          <Sider className={style.sider}>
            <div className={style.sider_top}>
              <div style={{ textAlign: 'center' }}>
                管理{siderTopMenu[0].toptitle}
              </div>
              {/* 加入团队 创建项目 邀请团队成员等 */}
              <div>
                <div className={style.siderTopMenu}>
                  {siderTopMenu.map((i, j) => {
                    return (
                      <div
                        key={j}
                        onClick={() => {
                          history.push(i.path || '/home');
                        }}
                      >
                        {i.title}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* 侧边栏 要实现动态路由 */}
            <div>
              <Menu
                defaultSelectedKeys={['1']}
                items={items}
                onClick={gotoItem}
              />
            </div>
          </Sider>
          {/* 子路由展示右侧工作区等 */}
          <Content className={style.content}>
            {props.children ? props.children : 'hello'}
          </Content>
        </Layout>
      ) : (
        <Button>登录</Button>
      )}
    </div>
  );
}
