import React, { useEffect, useState } from 'react';
import { List, Skeleton, Breadcrumb, Pagination, message, Popconfirm } from 'antd';
import style from './index.less';
import { Link, useHistory, useParams } from 'umi';
import storage from '@/utils/storage';
import { deleteTaskById, queryGroupTaskById } from '@/api/task/teacher';

const count = 6;
// 默认数据
const list1 = [
  {
    taskName: '1给我把项目做完',
    dec: '权限控制，动态路由，上分',
    deadLine: '2022-11-21',
    sUp: true,
    mainAuth: 'hcy',
    id: 1,
    teacher: false
  }, {
    taskName: '1给我把项目做完',
    dec: '权限控制，动态路由，上分',
    deadLine: '2022-11-21',
    sUp: true,
    mainAuth: 'hcy',
    id: 1,
    teacher: false
  }, {
    taskName: '1给我把项目做完',
    dec: '权限控制，动态路由，上分',
    deadLine: '2022-11-21',
    sUp: true,
    mainAuth: 'hcy',
    id: 1,
    teacher: false
  }, {
    taskName: '1给我把项目做完',
    dec: '权限控制，动态路由，上分',
    deadLine: '2022-11-21',
    sUp: true,
    mainAuth: 'hcy',
    id: 1,
    teacher: false
  }, {
    taskName: '1给我把项目做完',
    dec: '权限控制，动态路由，上分',
    deadLine: '2022-11-21',
    sUp: true,
    mainAuth: 'hcy',
    id: 1,
    teacher: false
  }, {
    taskName: '1给我把项目做完',
    dec: '权限控制，动态路由，上分',
    deadLine: '2022-11-21',
    sUp: true,
    mainAuth: 'hcy',
    id: 1,
    teacher: false
  },
];
export default function index() {
  // 使用导航栏
  const history = useHistory();
  // 设置加载状态
  const [initLoading, setInitLoading] = useState(true);

  const [userState, setUserState] = useState('老师');
  const litsType = ['管理员', '老师', '学生', '游客'];
  const params: { id: any } = useParams();
  // 钩子函数刷新状态
  useEffect(() => {
    try {
      if (storage.getItem('roleId') >= 1 && storage.getItem('roleId') <= 4) {
        setUserState(litsType[storage.getItem('roleId') - 1]);
      }
      else history.push('beforeLogin/login');
    } catch {
      history.push('beforeLogin/login');
    }
    setInitLoading(true);
    /**
     * 获取数据
     */
    queryGroupTaskById(params.id).then((res) => {

      if (res.data == null) {
        message.error({ content: '没有任务！', duration: 1 });
        history.push("/task/staging");
        return;
      }
      let resData;
      if (res.data.tasks != null) {
        resData = res.data.tasks.map((i: any) => {
          return {
            taskName: i.taskName,
            dec: i.story,
            deadLine: i.finisheddate != undefined ? i.finisheddate.split('T')[0] : i.deadline.split('T')[0],
            sUp: true,
            mainAuth: i.assignedto,
            id: i.id,
            teacher: false,
          }
        })
      }
      let resData1;
      if (res.data.ttasks != null) {
        resData1 = res.data.ttasks.map((i: any) => {
          return {
            taskName: i.name,
            dec: i.info,
            deadLine: i.finisheddate.split('T')[0],
            sUp: i.upload === '0' ? false : true,
            mainAuth: i.auther,
            id: i.id,
            teacher: true,
          }
        })
      }

      setList(resData.concat(resData1))
      setInitLoading(false);
    })
  }, []);


  const [list, setList] = useState(list1);
  /**
   * 删除任务
   * @param i 
   */
  function deleteTask(i: any) {
    deleteTaskById(i).then((res) => {
      console.log(res)
      message.success({ content: '删除任务成功！', duration: 1 });
    })
    setInitLoading(true);
    queryGroupTaskById(params.id).then((res) => {

      let resData;
      if (res.data.tasks != null) {
        resData = res.data.tasks.map((i: any) => {
          return {
            taskName: i.taskName,
            dec: i.story,
            deadLine: i.finisheddate.split('T')[0],
            sUp: true,
            mainAuth: i.assignedto,
            id: i.id,
            teacher: false,
          }
        })
      }
      let resData1;
      if (res.data.ttasks != null) {
        resData1 = res.data.ttasks.map((i: any) => {
          return {
            taskName: i.name,
            dec: i.info,
            deadLine: i.finisheddate.split('T')[0],
            sUp: i.upload === '0' ? false : true,
            mainAuth: i.auther,
            id: i.id,
            teacher: true,
          }
        })
      }
      if (resData == undefined && resData1 == undefined) {
        history.push("/task/staging");
        return;
      }
      setList(resData.concat(resData1))
      setInitLoading(false);
    })
  }
  const cancel = () => {
    message.error('删除失败！');
  };
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
              <div>主要负责人</div>
            </div>
          }
          footer={
            list.length > 0 ? (
              <div className={style.footer}>
                <Pagination pageSize={count} total={30} responsive={true} />
              </div>
            ) : null
          }
          renderItem={(item, i) => (
            <List.Item
              actions={[
                userState == '老师' ? (
                  <Link key="list-look" to={`/task/lookTask/${item.id}/${item.teacher === true ? 1 : 0}`}>
                    查看
                  </Link>
                ) : (
                  <Link to="/task/loadTask" key="list-edit">
                    编辑
                  </Link>
                ),
                <Popconfirm
                  title="是否删除该任务？"
                  onConfirm={() => deleteTask(item.id)}
                  onCancel={cancel}
                  okText="是"
                  cancelText="否"
                >
                  <a key="list-delete">
                    删除
                  </a>
                </Popconfirm>
                ,
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
                  <div>{item.mainAuth}</div>
                </div>
              </Skeleton>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}
