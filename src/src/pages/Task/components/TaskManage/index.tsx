import React, { useEffect, useState } from 'react';
import { List, Skeleton, Breadcrumb, Pagination } from 'antd';
import style from './index.less';
import { Link } from 'umi';
import storage from '@/utils/storage';

const count = 6;

export default function index() {
  const [initLoading, setInitLoading] = useState(true);
  const [userState, setUserState] = useState('学生');
  useEffect(() => {
    setUserState(storage.getItem('userMsg').userType);
    setTimeout(() => {
      setInitLoading(false);
    }, 1500);
  }, []);

  let list1 = [
    {
      taskName: '1给我把项目做完',
      dec: '权限控制，动态路由，上分',
      deadLine: '2022-11-21',
      sUp: true,
    },
    {
      taskName: '2给我把项目做完',
      dec: '权限控制，动态路由，上分',
      deadLine: '2022-11-21',
      sUp: true,
    },
    {
      taskName: '3给我把项目做完',
      dec: '权限控制，动态路由，上分',
      deadLine: '2022-11-21',
      sUp: true,
    },
    {
      taskName: '4给我把项目做完',
      dec: '权限控制，动态路由，上分',
      deadLine: '2022-11-21',
      sUp: true,
    },
    {
      taskName: '5给我把项目做完',
      dec: '权限控制，动态路由，上分',
      deadLine: '2022-11-21',
      sUp: true,
    },
    {
      taskName: '6给我把项目做完',
      dec: '权限控制，动态路由，上分',
      deadLine: '2022-11-21',
      sUp: true,
    },
    {
      taskName: '7给我把项目做完',
      dec: '权限控制，动态路由，上分',
      deadLine: '2022-11-21',
      sUp: true,
    },
    {
      taskName: '8给我把项目做完',
      dec: '权限控制，动态路由，上分',
      deadLine: '2022-11-21',
      sUp: true,
    },
  ];
  const [list, setList] = useState(list1);
  function deleteTask(i: any) {
    list1 = list1.filter((e, it) => it != i);
    setList(list1);
  }
  return (
    <div className={style.container}>
      <div className={style['menu']}>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Link to="/task">实践任务</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/task/staging">工作台</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>任务管理</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className={style.body}>
        <List
          loading={initLoading}
          dataSource={list}
          header={
            <div className={style.header}>
              <div>任务名称</div>
              <div>任务描述</div>
              <div>截止日期</div>
              <div>上传状态</div>
            </div>
          }
          footer={
            list.length > count ? (
              <div className={style.footer}>
                <Pagination pageSize={count} total={30} responsive={true} />
              </div>
            ) : null
          }
          renderItem={(item, i) => (
            <List.Item
              actions={[
                userState == '老师' ? (
                  <Link key="list-look" to="/task/lookTask">
                    查看
                  </Link>
                ) : (
                  <Link to="/task/loadTask" key="list-edit">
                    编辑
                  </Link>
                ),
                <a key="list-delete" onClick={() => deleteTask(i)}>
                  删除
                </a>,
              ]}
            >
              <Skeleton
                title={false}
                paragraph={{ rows: 1, width: '100%' }}
                loading={initLoading}
                active
              >
                <div className={style.header}>
                  <div>{item.taskName}</div>
                  <div>{item.dec}</div>
                  <div>{item.deadLine}</div>
                  <div>{item.sUp ? '是' : '否'}</div>
                </div>
              </Skeleton>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}
