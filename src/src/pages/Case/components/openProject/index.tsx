import React, { useEffect, useState } from 'react';
import {
  LikeOutlined,
  PieChartOutlined,
  StarOutlined,
} from '@ant-design/icons';
import { Input, Avatar, List, Space, Menu } from 'antd';
import type { MenuProps } from 'antd';
import styled from './index.less';
import { getNavigation, getProjectList, SearchProjectList } from '@/api/case';
const { Search } = Input;

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

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
  repUrl: string;
  title: string;
  avatar: string;
  introduction: string;
  content: string;
}

function OpenProject() {
  // 左侧导航栏
  const [item, setItem] = useState<MenuItem[]>([]);
  const [projectList, setProjectList] = useState<ListProps[] | undefined>();
  const [param, setParam] = useState('');
  // 搜索框搜索
  const getData = async () => {
    await SearchProjectList(param).then((res) => {
      console.log(res);
      setProjectList(res.data.osps);
    });
  };
  //左侧导航栏 开源项目分类
  const onClick: MenuProps['onClick'] = (e: any) => {
    //console.log('e', e);
    getProjectList(e.key).then((res) => {
      // console.log('开源', res);
      setProjectList(res.data.osps);
    });
  };

  useEffect(() => {
    // 获取左侧导航栏 开源项目分类
    getNavigation().then((res) => {
      setItem(res.data.lists);
    });
    getProjectList('养殖').then((res) => {
      //console.log('开源', res.data);
      setProjectList(res.data.osps);
    });
  }, []);

  //左侧菜单
  const items: MenuItem[] = [
    getItem('项目分类', 'tech', <PieChartOutlined />, [
      getItem(
        '类别',
        null,
        null,
        item?.map((i: any, index) => {
          return getItem(i?.label, i?.key);
        }),
        // getItem('项目类别1', '/techShare/techFront'),
        // getItem('项目类别2', '/techShare/techEnd'),
        // getItem('项目类别3', '/techShare/techGame'),
        // getItem('项目类别4', '/techShare/techOther'),
        'group',
      ),
    ]),
  ];
  return (
    <div className={styled.openProjectWrapper}>
      {/* {右侧开源项目分类导航栏} */}
      <div>
        <Menu
          onClick={onClick}
          style={{ width: 200 }}
          mode="inline"
          items={items}
          defaultSelectedKeys={['sort1']}
          defaultOpenKeys={['tech']}
        />
      </div>
      <Search
        className={styled['search']}
        placeholder="搜索开源项目"
        onSearch={getData}
        onChange={(e) => {
          console.log(e.target.value);
          setParam(e.target.value);
        }}
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
        dataSource={projectList}
        renderItem={(item: ListProps) => (
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
          >
            <List.Item.Meta
              // avatar={<Avatar src={item.avatar} />}
              title={
                <a
                  href={item.repUrl}
                  target="_blank"
                  rel="noopener noreferrer external"
                >
                  {item.title}
                </a>
              }
              description={item.introduction}
            />
            {/* {item.content} */}
          </List.Item>
        )}
      />
    </div>
  );
}

export default OpenProject;
