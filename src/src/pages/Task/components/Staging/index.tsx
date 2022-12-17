/*
 * @Author: hcy
 * @Date: 2022-11-07 19:53:51
 * @LastEditors: hcy
 * @LastEditTime: 2022-12-10 18:16:54
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
export default function index() {
  const [userState, setUserState] = useState('老师');
  const litsType = ["管理员", "学生", "老师", "游客"]
  useEffect(() => {
    setUserState(litsType[storage.getItem('userMsg').classId - 1]);
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

  useEffect(() => {
    //调用从后台获取统计数据的函数
    getCount();
  }, []);

  const getCount = () => {
    //接口获取任务情况数据
    setCountResult({
      abort: 2, //任务剩余量
      doing: 30, //任务剩余量
      done: 20, //任务完成量
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
