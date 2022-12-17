/*
 * @Author: hcy
 * @Date: 2022-10-06 18:46:12
 * @LastEditors: hcy
 * @LastEditTime: 2022-12-10 18:20:35
 * @FilePath: \src\src\pages\Task\index.tsx
 * @Description: 实践任务
 *
 */
import storage from '@/utils/storage';
import { DesktopOutlined, TeamOutlined, PlusOutlined } from '@ant-design/icons';
import { Layout, Button, Menu } from 'antd';
import { useEffect, useState } from 'react';
import { useHistory } from 'umi';
const { Content, Sider } = Layout;
import style from './index.less';
export default function Task(props: any) {
  const history = useHistory();
  const [userState, setUserState] = useState('老师');
  const litsType = ["管理员", "学生", "老师", "游客"]
  useEffect(() => {
    try {
      if (storage.getItem('userMsg').classId)
        setUserState(litsType[storage.getItem('userMsg').classId - 1]);
      else
        history.push('/login');
    } catch {
      history.push('beforeLogin/login');
    }
    
  }, []);
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
    {
      toptitle: '您的学生',
      title: '创建班级',
      path: '/task/createClass',
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
      key: `${userState == '学生' ? '/task/taskList' : '/task/taskManage'}`,
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
