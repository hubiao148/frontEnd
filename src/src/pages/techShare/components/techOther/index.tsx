import React from 'react';
import { Input, Avatar, List } from 'antd';
import styled from '../../index.less';
const { Search } = Input;
const data = Array.from({ length: 23 }).map((_, i) => ({
  href: 'https://gitee.com/han-changyuan/easySE_frontEnd',
  title: `其它资料 ${i}`,
  avatar: 'https://joeschmoe.io/api/v1/random',
  content: `大小${i + 1.4}kB  下载数${i + 120}  于${new Date()} 发布`,
}));

function TechOther() {
  const getData = async () => {};
  return (
    <div className={styled.openProjectWrapper}>
      <Search
        className={styled['search']}
        placeholder="搜索资料"
        onSearch={getData}
      />
      {/* 技术分享资料 ppt docx 等 */}
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
          <List.Item key={item.title}>
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<a href={item.href}>{item.title}</a>}
            />
            {item.content}
          </List.Item>
        )}
      />
    </div>
  );
}

export default TechOther;
