/*
 * @Author: zyqqun
 * @Date: 2022-10-24 13:28:28
 * @LastEditors: zyqqun 2450100414@qq.com
 * @LastEditTime: 2022-12-30 16:18:42
 * @FilePath: \src\src\pages\techShare\index.tsx
 * @Description:
 *
 * Copyright (c) 2022 by zyqqun 2450100414@qq.com, All Rights Reserved.
 */
import React, { useEffect, useState } from 'react';
import { PieChartOutlined } from '@ant-design/icons';
import { Input, Avatar, List, Menu, Breadcrumb } from 'antd';
import type { MenuProps } from 'antd';
import { Link } from 'umi';
import styled from './index.less';
import BackToTop from '@/components/BackTop';
import { getShareNavigation, getTeachShareList } from '@/api/techShare';
import FileViewer from 'react-file-viewer';
import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';
const { Search } = Input;
type MenuItem = Required<MenuProps>['items'][number];
function getItem(
  label: React.ReactNode,
  key: string | null,
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

// interface ListProps {
//   urlLists: [];
//   title: string;
//   avatar: string;
//   description: string;
//   content: string;
// }

function techShare(props: any) {
  // 左侧导航栏
  const [item, setItem] = useState<MenuItem[]>([]);
  //技术分享文件列表
  const [shareList, setShareList] = useState<[] | undefined>();

  // 搜索框搜索
  const getData = async () => {};
  //左侧导航栏 前端 后端 游戏开发 其它
  const onClick: MenuProps['onClick'] = (e) => {
    console.log(e);
    getTeachShareList(e.key).then((res) => {
      //console.log('分享', res.data);
      setShareList(res?.data?.lists);
    });
  };
  //加载技术分享的文件
  useEffect(() => {
    // 获取左侧导航栏 技术分享分类
    getShareNavigation().then((res) => {
      //console.log(res.data);
      setItem(res.data.lists);
    });
    getTeachShareList('1').then((res) => {
      setShareList(res?.data?.lists);
    });
  }, []);

  //左侧菜单
  const items: MenuItem[] = [
    getItem('技术方向', 'tech', <PieChartOutlined />, [
      getItem(
        '类别',
        null,
        null,
        item?.map((i: any, index) => {
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

  const openFile = (fileUrl: any) => {
    window.open(
      'https://view.xdocin.com/view?src=' + encodeURIComponent(fileUrl),
    );
  };

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
            defaultSelectedKeys={['1']}
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
          renderItem={(item: any) => (
            <List.Item
              className={styled.listItem}
              key={item.sceneDesign.title}
              onClick={() => openFile(item.urlLists[0])}
            >
              <List.Item.Meta
                title={item.sceneDesign.title}
                description={item.sceneDesign.title}
              />
              {item.sceneDesign.content}
            </List.Item>
          )}
        />
      </div>
      <BackToTop />
    </div>
  );
}

export default techShare;
