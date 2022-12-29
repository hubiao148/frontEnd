/*
 * @Author: hcy
 * @Date: 2022-11-07 19:53:51
 * @LastEditors: zyqqun 2450100414@qq.com
 * @LastEditTime: 2022-12-29 22:48:03
 * @FilePath: \src\src\pages\Task\components\Staging\index.tsx
 * @Description: 工作台
 *
 */
import React, { useEffect, useState } from 'react';
import { Breadcrumb } from 'antd';
import StagingStudent from './components/StagingStudent';
import style from './index.less';
import { useHistory } from 'umi';
import storage from '@/utils/storage';
import StagingTeacher from './components/StagingTeacher';
import { getCountResult, getGroupId } from '@/api/task';
export default function index() {
  //页面展示得时候就请求一次user
  const [groupId, setGroupId] = useState<number>();
  const [userState, setUserState] = useState('学生');
  const litsType = ['管理员', '老师', '学生', '游客'];
  useEffect(() => {
    // 选择渲染
    try {
      if (storage.getItem('roleId') >= 1 && storage.getItem('roleId') <= 4) {
        setUserState(litsType[storage.getItem('roleId') - 1]);
      } else history.push('beforeLogin/login');
    } catch {
      history.push('beforeLogin/login');
    }
  }, []);
  const history = useHistory();
  function goBack() {
    history.go(-1);
  }
  //统计数据
  const [countResult, setCountResult] = useState<Record<string, number>>({
    abort: 0,
    doing: 20,
    done: 10,
  });
  const userId = storage.getItem('userMsg').id;
  useEffect(() => {
    getGroupId(userId).then((res) => {
      // console.log(res.groupId);
      //@ts-ignore
      setGroupId(res.groupId);
    });
  }, []);
  useEffect(() => {
    //调用从后台获取统计数据的函数
    getCount();
  }, [groupId]);

  const getCount = () => {
    //接口获取任务情况数据
    getCountResult(groupId).then((res) => {
      setCountResult({
        abort: res.data.finished, //任务已截至量
        doing: res.data.wait, //任务剩余量
        done: res.data.done, //任务完成量
      });
    });
  };
  return (
    <div className={style.container}>
      <div className={style.top}>
        <Breadcrumb separator=">" style={{ cursor: 'pointer' }}>
          <Breadcrumb.Item onClick={goBack}>实践任务</Breadcrumb.Item>
          <Breadcrumb.Item>工作台</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className={style.body}>
        {userState == '学生' ? (
          <StagingStudent countResult={countResult} />
        ) : (
          <StagingTeacher />
        )}
      </div>
    </div>
  );
}
