import React from 'react';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Input, Avatar, List, Space } from 'antd';
import styled from './index.less';
const { Search } = Input;
const data = Array.from({ length: 23 }).map((_, i) => ({
  href: 'https://gitee.com/han-changyuan/easySE_frontEnd',
  title: `值得学习的开源项目 ${i}`,
  avatar: 'https://joeschmoe.io/api/v1/random',
  description:
    'Gitee, a design language for background applications, is refined by Ant UED Team.',
  content:
    '这是一个基于React17+Redux+Typescript4+umi3+jotai+ant的企业级React项目',
}));

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

function OpenProject() {
  const getData = async () => {};
  return (
    <div className={styled.openProjectWrapper}>
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
        dataSource={data}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            actions={[
              <IconText
                icon={StarOutlined}
                text="156"
                key="list-vertical-star-o"
              />,
              <IconText
                icon={LikeOutlined}
                text="156"
                key="list-vertical-like-o"
              />,
            ]}
            extra={
              <img
                width={272}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
            }
          >
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
  );
}

export default OpenProject;
