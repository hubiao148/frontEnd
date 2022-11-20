/*
 * @Author: hcy
 * @Date: 2022-10-06 18:46:12
 * @LastEditors: hcy
 * @LastEditTime: 2022-11-20 15:41:14
 * @FilePath: \src\src\pages\Task\index.tsx
 * @Description: 实践任务
 *
 */
import storage from '@/utils/storage';
import { DesktopOutlined, TeamOutlined } from '@ant-design/icons';
import { Layout, Button, Menu } from 'antd'
import { useState } from 'react';
import { useHistory } from 'umi';
const { Content, Sider } = Layout;
import style from './index.less';
export default function Task(props: any) {
  const history = useHistory();
  const siderTopMenu = [{
    toptitle: '您的学生',
    title: '创建班级',
    path: '/task/createclass',
  }
  ]
  const items = [{
    key: '/task/staging',
    label: '工作台',
    icon: <DesktopOutlined />,
  },
  {
    key: '/task/createtask',
    label: '创建任务',
    icon: <DesktopOutlined />,
  },
  ]
  function gotoItem(e: any) {
    history.push(e.key)
  }
  return (
    <div className={style.container}>
      {
        storage.getItem("token") ? (
          <Layout>
            <Sider className={style.sider}>
              <div className={style.sider_top}>
                <div style={{ textAlign: 'center' }}>管理{siderTopMenu[0].toptitle}</div>
                <div >
                  <div className={style.siderTopMenu}>
                    {
                      siderTopMenu.map((i, j) => {
                        return (<div key={j} onClick={() => {
                          history.push(i.path || '/home');
                        }}>
                          {i.title}
                        </div>)
                      })
                    }
                  </div>
                </div>
              </div>
              <div><Menu
                defaultSelectedKeys={['1']}
                items={items}
                onClick={gotoItem}
              /></div>
            </Sider>

            <Content className={style.content}>
              {props.children ? props.children : 'hello'}
            </Content>
          </Layout>
        ) : (
          <Button>登录</Button>
        )
      }

    </div >
  );
}
