/*
 * @Author: hcy
 * @Date: 2022-11-07 19:53:51
 * @LastEditors: zyqqun 2450100414@qq.com
 * @LastEditTime: 2022-11-21 18:39:54
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
  const [userState, setUserState] = useState('学生');
  useEffect(() => {
    setUserState(storage.getItem('userMsg').userType);
  }, []);
  const history = useHistory();
  function goBack() {
    history.go(-1);
  }

  const [countResult, setCountResult] = useState<Record<string, number>>({
    doing: 20,
    done: 10,
  });

  useEffect(() => {
    getCount();
  }, []);

  const getCount = () => {
    //接口获取任务情况数据
    setCountResult({
      doing: 30,
      done: 20,
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
