/*
 * @Author: zyqqun
 * @Date: 2022-11-23 18:40:02
 * @LastEditors: zyqqun 2450100414@qq.com
 * @LastEditTime: 2022-11-23 19:43:01
 * @FilePath: \src\src\pages\Message\index.tsx
 * @Description:
 *
 * Copyright (c) 2022 by zyqqun 2450100414@qq.com, All Rights Reserved.
 */
import React, { useEffect, useState } from 'react';
import { MailOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu, List, Avatar } from 'antd';
import { getShareList } from '@/api/case';
import styled from './index.less';
import NoMessage from './noMessage';
const items: MenuProps['items'] = [
  {
    label: '评论',
    key: 'comment',
  },
  {
    label: '回复',
    key: 'reply',
  },
  {
    label: '系统消息',
    key: 'csMessage',
  },
];

const data = [
  {
    title: '***评论了你的** 1',
  },
  {
    title: '***评论了你的** 2',
  },
  {
    title: '***评论了你的** 3',
  },
  {
    title: '***评论了你的** 4',
  },
  {
    title: '***评论了你的** 5',
  },
  {
    title: '***评论了你的** 6',
  },
];

function Message() {
  const [current, setCurrent] = useState('comment');
  // const [shareList, setShareList] = useState<ListProps[] | undefined>();

  //左侧导航栏 前端 后端 游戏开发 其它
  const onClick: MenuProps['onClick'] = (e) => {
    // getShareList(e.key).then((res) => {
    //   console.log('分享', res.data);
    //   setShareList(res.data);
    // });
    setCurrent(e.key);
  };
  //加载技术分享的文件
  // useEffect(() => {
  //   getShareList('Front').then((res) => {
  //     setShareList(res.data);
  //   });
  // }, []);

  return (
    <div>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
      <div className={styled.MessageWra}>
        {current === 'comment' ? (
          <List
            className={styled.list}
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  title={<a href="https://ant.design">{item.title}</a>}
                  description="叮！请注意，你有一份新人创作礼等待查收！坚持创作持续分享，有价值的分享值得奖励。"
                />
              </List.Item>
            )}
          />
        ) : (
          <NoMessage></NoMessage>
        )}
      </div>
    </div>
  );
}

export default Message;
