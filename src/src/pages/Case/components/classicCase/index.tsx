/*
 * @Author: zyq
 * @Date: 2022-10-24 09:50:36
 * @Last Modified by: zyq
 * @Last Modified time: 2022-10-24 21:52:44
 */

import React, { useEffect, useState } from 'react';
import {
  AppstoreOutlined,
  ArrowUpOutlined,
  LikeOutlined,
  PieChartOutlined,
  StarOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Input, Menu, Card, Skeleton, Divider, Modal, BackTop } from 'antd';
import { useHistory } from 'umi';
import styled from './index.less';
import InfiniteScroll from 'react-infinite-scroll-component';
import MaskForm from './MaskForm';
import BackToTop from '@/components/BackTop';
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

//左侧菜单
const items: MenuItem[] = [
  getItem('技术分享', null, <PieChartOutlined />, [
    getItem(
      '上传',
      null,
      null,
      [getItem('技术分享案例', '/techShare'), getItem('技术分享上传', ' ')],
      'group',
    ),
  ]),

  getItem('设计模式', '/case', <AppstoreOutlined />),
];

function ClassicCase() {
  const history = useHistory();
  const [modeList, setModeList] = useState([]);
  //提交技术分享的表单模态框
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClick: MenuProps['onClick'] = (e) => {
    e.keyPath[0] === ' ' ? setIsModalOpen(true) : history.push(e.keyPath[0]);
    // console.log('click', typeof e.keyPath[0]);
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
  //关闭模态框
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setIsModalOpen(false);
  };

  //跳转至详情页面
  const toModeDetail = () => {};
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

      <Modal
        footer={null}
        width="80vw"
        style={{
          maxWidth: '100vw',
          top: 0,
          paddingBottom: 0,
        }}
        bodyStyle={{ height: '100vh' }}
        maskClosable={false}
        open={isModalOpen}
        onCancel={handleCancel}
      >
        <MaskForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </Modal>

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
                  onClick={toModeDetail}
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
      <BackToTop />
    </div>
  );
}

export default ClassicCase;
