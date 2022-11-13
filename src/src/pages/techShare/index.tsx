/*
 * @Author: zyq
 * @Date: 2022-10-24 17:06:04
 * @Last Modified by: zyq
 * @Last Modified time: 2022-10-30 20:50:51
 */

import React, { useEffect, useState } from 'react';
import { PieChartOutlined } from '@ant-design/icons';
import { Input, Avatar, List, Menu, Breadcrumb } from 'antd';
import type { MenuProps } from 'antd';
import { Link } from 'umi';
import styled from './index.less';
import BackToTop from '@/components/BackTop';
import { getShareList, getShareNavigation } from '@/api/case';
const { Search } = Input;
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

interface ListProps {
  href: string;
  title: string;
  avatar: string;
  description: string;
  content: string;
}

function techShare(props: any) {
  // 左侧导航栏
  const [item, setItem] = useState<MenuItem[]>([]);
  const [shareList, setShareList] = useState<ListProps[] | undefined>();

  // 搜索框搜索
  const getData = async () => {};
  //左侧导航栏 前端 后端 游戏开发 其它
  const onClick: MenuProps['onClick'] = (e) => {
    getShareList(e.key).then((res) => {
      console.log('分享', res.data);
      setShareList(res.data);
    });
  };
  //加载技术分享的文件
  useEffect(() => {
    // 获取左侧导航栏 开源项目分类
    getShareNavigation().then((res) => {
      setItem(res.data);
    });
    getShareList('Front').then((res) => {
      setShareList(res.data);
    });
  }, []);

  //左侧菜单
  const items: MenuItem[] = [
    getItem('技术方向', 'tech', <PieChartOutlined />, [
      getItem(
        '类别',
        null,
        null,
        item.map((i: any, index) => {
          return getItem(i?.label, i?.key);
        }),
        // [
        //   getItem('前端', '/techShare/techFront'),
        //   getItem('后端', '/techShare/techEnd'),
        //   getItem('游戏开发', '/techShare/techGame'),
        //   getItem('其它', '/techShare/techOther'),
        // ],
        'group',
      ),
    ]),
  ];

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
            defaultSelectedKeys={['Front']}
            defaultOpenKeys={['tech']}
          />
        </div>
        {/* {展示各个技术方向的技术分享资料} */}
        <Search
          className={styled['search']}
          placeholder="搜索开源项目"
          onSearch={getData}
        />
        <List
          className={styled.list}
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 5,
          }}
          dataSource={shareList}
          renderItem={(item: ListProps) => (
            <List.Item key={item.title}>
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<a href={item.href}>{item.title}</a>}
                description={item.description}
              />
              {item.content}
            </List.Item>
          )}
        />
      </div>
      <BackToTop />
    </div>
  );
}

export default techShare;
