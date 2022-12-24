/*
 * @Author: zyqqun
 * @Date: 2022-11-23 18:40:02
 * @LastEditors: zyqqun 2450100414@qq.com
 * @LastEditTime: 2022-12-24 21:50:05
 * @FilePath: \src\src\pages\Message\index.tsx
 * @Description:
 *
 * Copyright (c) 2022 by zyqqun 2450100414@qq.com, All Rights Reserved.
 */
import React, { useEffect, useState } from 'react';
import { MailOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu, List, Avatar } from 'antd';
import styled from './index.less';
import NoMessage from './noMessage';
import { getMessage } from '@/api/message';
import storage from '@/utils/storage';
const items: MenuProps['items'] = [
  {
    label: '评论',
    key: 'comment',
  },
  {
    label: '点赞',
    key: 'like',
  },
  {
    label: '关注',
    key: 'follow',
  },
];

function Message() {
  const [hasMessage, setHasMessage] = useState(false);
  const [current, setCurrent] = useState('comment');
  const [messageList, setMessageList] = useState([]);
  const userId = storage.getItem('userMsg').id;
  //点击时请求不同的数据
  const onClick: MenuProps['onClick'] = (e) => {
    //console.log(e);
    getMessage({ userId: userId, topic: e.key }).then((res) => {
      console.log(res.data.notices);
      setHasMessage(true);
      setMessageList(res.data.notices);
    });

    setCurrent(e.key);
  };
  //加载通知的消息
  useEffect(() => {
    getMessage({ userId: userId, topic: current }).then((res) => {
      setHasMessage(true);
      setMessageList(res.data.notices);
    });
  }, []);

  return (
    <div>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
      <div className={styled.MessageWra}>
        {hasMessage ? (
          <List
            className={styled.list}
            itemLayout="horizontal"
            pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 5,
            }}
            dataSource={messageList}
            renderItem={(item: any) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={item.fromUser.headerUrl} />}
                  title={
                    <a href="">{`${item.fromUser.username}${
                      current == 'comment'
                        ? '评论了你'
                        : current == 'like'
                        ? '给你点赞啦!'
                        : '关注了你'
                    }`}</a>
                  }
                  // description={item.notice.content}
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
