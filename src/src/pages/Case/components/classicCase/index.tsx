/*
 * @Author: zyq
 * @Date: 2022-10-24 09:50:36
 * @Last Modified by: zyq
 * @Last Modified time: 2022-10-30 21:20:46
 */

import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { PieChartOutlined } from '@ant-design/icons';
import { Alert, MenuProps, Spin } from 'antd';
import { Input, Menu, Skeleton, Divider, Modal, Tooltip } from 'antd';
import { Link, NavLink, useHistory } from 'umi';
import styled from './index.less';
import InfiniteScroll, { Props } from 'react-infinite-scroll-component';
import MaskForm from './MaskForm';
import BackToTop from '@/components/BackTop';
import { getModeList } from '@/api/case';

const showdown = require('showdown');

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
  getItem('技术分享', 'tech', <PieChartOutlined />, [
    getItem(
      '上传',
      null,
      null,
      [getItem('技术分享案例', '/techShare'), getItem('技术分享上传', ' ')],
      'group',
    ),
  ]),
];

function ClassicCase() {
  const history = useHistory();
  const [modeList, setModeList] = useState([]);
  //提交技术分享的表单模态框
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const onClick: MenuProps['onClick'] = (e) => {
    e.keyPath[0] === ' ' ? setIsModalOpen(true) : history.push(e.keyPath[0]);
  };

  //获取设计模式的列表
  const appendData = () => {
    // const showdown = require('showdown');
    // let converter = new showdown.Converter();
    getModeList().then((res) => {
      setModeList(res.data.designModes);
      setLoading(false)
      // console.log('markdown', res.data.designModes[3].content);
      // console.log(converter.makeHtml(res.data.designModes[3].content));
    });
  };
  useEffect(() => {
    appendData();
  }, []);

  const Like = () => {
    console.log('点赞成功');
  };
  //搜索设计模式
  const getData = async () => {};
  //关闭模态框
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styled['caseWrapper']}>
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
      {/* 遮罩层实现技术分享的上传 */}
      <Modal
        destroyOnClose
        footer={null}
        width="70vw"
        style={{
          maxWidth: '100vw',
          top: 30,
          paddingBottom: 0,
        }}
        maskClosable={false}
        open={isModalOpen}
        onCancel={handleCancel}
      >
        <MaskForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </Modal>

      {/* 设计模式的卡片 */}
      {loading ? <Spin tip="正在玩命儿加载中...">
      <Alert
        message="经典案例"
        description="多种设计模式等你来探索。。。"
        type="info"
      />
    </Spin>:
        <div>
        {/* <Search
          className={styled['search']}
          placeholder="搜索设计模式"
          onSearch={getData}
        /> */}
        <div className={styled['card']}>
          {/* <InfiniteScroll
            style={{ display: 'flex', flexWrap: 'wrap', paddingTop: '2rem' }}
            dataLength={modeList.length}
            next={appendData}
            hasMore={modeList.length < 10}
            loader={<Skeleton avatar paragraph={{ rows: 2 }} active />}
            endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
          > */}
          {modeList.map((item: any, index: any) => {
            let converter = new showdown.Converter();
            return (
              <div key={index} className={styled['cardItem']}>
                <NavLink to={`/modeDetail/${item.id}`}>
                  <div className={styled['image']}>
                    <img src={'https://www.runoob.com/wp-content/uploads/2014/08/the-relationship-between-design-patterns.jpg'} alt="" />
                  </div>
                </NavLink>
                <div className={styled['content']}>
                  <div className={styled['title']}>{item.title}</div>
                  <div className={styled['bottom']}>
                    {`${converter
                      .makeHtml(item.content)
                      .slice(0, 25)
                      .replace(/<[^>]+>/gi, '')}......`}
                  </div>
                </div>
              </div>
            );
          })}
          {/* </InfiniteScroll> */}
        </div>
      </div>}
      <BackToTop />
    </div>
  );
}

export default ClassicCase;
