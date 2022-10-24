/*
 * @Author: zyq
 * @Date: 2022-10-24 09:50:36
 * @Last Modified by: zyq
 * @Last Modified time: 2022-10-24 20:42:25
 */

import React, { useEffect, useState } from 'react';
import {
  AppstoreOutlined,
  LikeOutlined,
  PieChartOutlined,
  StarOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Input, Menu, Card, Skeleton, Divider } from 'antd';
import { useHistory } from 'umi';
import styled from './index.less';
import InfiniteScroll from 'react-infinite-scroll-component';
type MenuItem = Required<MenuProps>['items'][number];
const { Meta } = Card;
const { Search } = Input;
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

const items: MenuItem[] = [
  getItem('技术分享', null, <PieChartOutlined />, [
    getItem(
      '上传',
      null,
      null,
      [
        getItem('技术分享案例', '/techShare'),
        getItem('技术分享上传', '/case/techShareUpLoad'),
      ],
      'group',
    ),
  ]),

  getItem('设计模式', '/case', <AppstoreOutlined />),
];
function ClassicCase() {
  const history = useHistory();
  const [modeList, setModeList] = useState([]);

  const onClick: MenuProps['onClick'] = (e) => {
    history.push(e.keyPath[0]);
    console.log('click', e.keyPath[0]);
  };

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

  const getData = async () => {};

  return (
    <div className={styled['caseWrapper']}>
      <div>
        <Menu
          onClick={onClick}
          style={{ width: 200 }}
          mode="vertical"
          items={items}
        />
      </div>

      {/* 设计模式的卡片 */}
      <div>
        <Search
          className={styled['search']}
          placeholder="搜索设计模式"
          onSearch={getData}
        />
        <div className={styled['card']}>
          <InfiniteScroll
            style={{ display: 'flex', flexWrap: 'wrap' }}
            dataLength={modeList.length}
            next={appendData}
            hasMore={modeList.length < 30}
            loader={<Skeleton avatar paragraph={{ rows: 2 }} active />}
            endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
          >
            {modeList.map((item: any, index: any) => {
              return (
                <Card
                  key={item.id}
                  hoverable
                  className={styled.cardItem}
                  style={{
                    maxWidth: '22rem',
                    minWidth: '20rem',
                    minHeight: '36rem',
                    fontSize: '0.8rem',
                  }}
                  cover={<img alt="example" src={item.src} />}
                  actions={[
                    <LikeOutlined key="like" />,
                    <StarOutlined key="star" />,
                  ]}
                >
                  <Meta title={item.title} description={item.description} />
                </Card>
              );
            })}
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
}

export default ClassicCase;
