/*
 * @Author: zyqqun
 * @Date: 2022-11-21 21:22:16
 * @LastEditors: zyqqun 2450100414@qq.com
 * @LastEditTime: 2022-12-25 19:44:27
 * @FilePath: \src\src\pages\Task\components\Manage\index.tsx
 * @Description:
 *
 * Copyright (c) 2022 by zyqqun 2450100414@qq.com, All Rights Reserved.
 */
import React, { useEffect, useMemo, useState } from 'react';
import TaskItem from './TackItem';
import { Input, ConfigProvider } from 'antd';
const moment = require('moment');
import './index.less';
import TaskDetail from './TaskDetail';
import { deleteTask, getGroupId, getMissionList } from '@/api/task';
import storage from '@/utils/storage';
const { Search } = Input;
export interface taskT {
  id: number;
  name: string;
  // desc: string;
  //startTime: string;
  finisheddate: any;
  upload: string;
}

function TaskList() {
  const [tasks, setTasks] = useState<taskT[]>([]);
  const [activeTaskKey, setActiveTaskKey] = useState<number>(0);
  const activeTask = useMemo(() => {
    return tasks?.find((i) => i.id === activeTaskKey);
  }, [tasks, activeTaskKey]);
  //页面展示得时候就请求一次user
  const [groupId, setGroupId] = useState<number>();
  const userId = storage.getItem('userMsg').id;
  useEffect(() => {
    getGroupId(userId).then((res) => {
      // console.log(res.groupId);
      setGroupId(res.groupId);
    });
  }, []);
  //获取任务列表
  const missionList = () => {
    getMissionList(groupId).then((res) => {
      console.log(res);
      setTasks(res?.data?.ttasks);
    });
  };
  useEffect(() => {
    console.log('groupId', groupId);
    missionList();
  }, [groupId]);

  return (
    <div className="task-list">
      <div className="task-list-top">
        <h1 className="title">指派任务</h1>
      </div>
      <div className="task-item__container">
        {tasks?.map((i) => (
          <TaskItem
            key={i.name}
            active={activeTaskKey === i.id}
            name={i.name}
            // desc={i.desc}
            finisheddate={i.finisheddate}
            upload={i.upload}
            onUpload={() => {
              setActiveTaskKey(i.id);
            }}
            onEdit={() => setActiveTaskKey(i.id)}
          ></TaskItem>
        ))}
      </div>
      <TaskDetail
        groupId={groupId}
        task={activeTask}
        tasks={tasks}
        setTasks={setTasks}
        onClose={() => setActiveTaskKey(0)}
      />
    </div>
  );
}

export default TaskList;
