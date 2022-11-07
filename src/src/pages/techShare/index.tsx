/*
 * @Author: zyq
 * @Date: 2022-10-24 17:06:04
 * @Last Modified by: zyq
 * @Last Modified time: 2022-10-30 20:50:51
 */

import React, { useEffect, useState } from 'react';
import { Breadcrumb, Menu } from 'antd';
import type { MenuProps } from 'antd';
import { Link, useHistory } from 'umi';
import styled from './index.less';
import BackToTop from '@/components/BackTop';
import { PieChartOutlined } from '@ant-design/icons';

type MenuItem = Required<MenuProps>['items'][number];
function getItem(
  label: React.ReactNode,
  key?: string | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

//左侧菜单
const items: MenuItem[] = [
  getItem('技术方向', 'tech', <PieChartOutlined />, [
    getItem(
      '类别',
      null,
      null,
      [
        getItem('前端', '/techShare/techFront'),
        getItem('后端', '/techShare/techEnd'),
        getItem('游戏开发', '/techShare/techGame'),
        getItem('其它', '/techShare/techOther'),
      ],
      'group',
    ),
  ]),
];

function techShare(props: any) {
  const history = useHistory();
  const [modeList, setModeList] = useState([]);
  //左侧导航栏 前端 后端 游戏开发 其它
  const onClick: MenuProps['onClick'] = (e) => {
    history.push(e.keyPath[0]);
  };
  //加载技术分享的文件
  const appendData = () => {
    fetch('/umi/modeList')
      .then((res) => res.json())
      .then((res) => {
        setModeList(res.data);
      });
  };

  useEffect(() => {
    appendData();
  }, []);

  return (
    <div className={styled['shareWrapper']}>
      <div className={styled['menu']}>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Link to="/case">实践案例</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>技术分享</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      {/* 设计模式的卡片 */}
      <div className={styled['card']}>
        <div>
          <Menu
            onClick={onClick}
            style={{ width: 200 }}
            mode="inline"
            items={items}
            defaultSelectedKeys={['/techShare/techFront']}
            defaultOpenKeys={['tech']}
          />
        </div>
        {/* {子路由：展示各个技术方向的技术分享资料} */}
        <div>{props.children}</div>
      </div>
      <BackToTop />
    </div>
  );
}

export default techShare;
