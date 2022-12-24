import React, { useEffect, useState } from 'react';
import { List, Skeleton, Breadcrumb, Pagination, message } from 'antd';
import style from './index.less';
import { Link, useHistory, useParams } from 'umi';
import storage from '@/utils/storage';
import { deleteTaskById, queryGroupTaskById } from '@/api/task/teacher';

const count = 6;
const list1 = [
  {
    taskName: '1给我把项目做完',
    dec: '权限控制，动态路由，上分',
    deadLine: '2022-11-21',
    sUp: true,
    mainAuth: 'hcy',
    id: 1,
    teacher:false
  }
];
export default function index() {
  const history = useHistory();
  const [initLoading, setInitLoading] = useState(true);
  const [userState, setUserState] = useState('老师');
  const litsType = ["管理员", "学生", "老师", "游客"]
  const params: { id: any } = useParams();
  useEffect(() => {
    setUserState(storage.getItem('userMsg').userType);
    try {
      if (storage.getItem('userMsg').classId)
        setUserState(litsType[storage.getItem('userMsg').classId - 1]);
      else
        history.push('/login');
    } catch {
      history.push('beforeLogin/login');
    }
    setInitLoading(true);
    queryGroupTaskById(params.id).then((res) => {
      let resData = res.data.tasks.map((i: any) => {
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
      let resData1 = res.data.ttasks.map((i: any) => {
        return {
          taskName: i.name,
          dec: i.info,
          deadLine: i.finisheddate.split('T')[0],
          sUp: i.upload==='0'?false:true,
          mainAuth: i.auther,
          id: i.id,
          teacher:true,
        }
      })
      setList(resData.concat(resData1))
      setInitLoading(false);
    })
  }, []);

 
  const [list, setList] = useState(list1);
  function deleteTask(i: any) {
    deleteTaskById(i).then((res) => {
      console.log(res)
      message.success({ content: '删除任务成功！', duration: 1 });
    })
    setInitLoading(true);
    queryGroupTaskById(params.id).then((res) => {
      let resData = res.data.tasks.map((i: any) => {
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
      let resData1 = res.data.ttasks.map((i: any) => {
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
      setList(resData.concat(resData1))
      setInitLoading(false);
    })
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
                  <Link key="list-look" to={`/task/lookTask/${item.id}/${item.teacher===true?1:0}`}>
                    查看
                  </Link>
                ) : (
                  <Link to="/task/loadTask" key="list-edit">
                    编辑
                  </Link>
                ),
                <a key="list-delete" onClick={() => deleteTask(item.id)}>
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
                  <div>{item.mainAuth }</div>
                </div>
              </Skeleton>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}
