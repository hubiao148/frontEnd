/*
 * @Author: zyqqun
 * @Date: 2022-11-21 21:22:16
 * @LastEditors: zyqqun 2450100414@qq.com
 * @LastEditTime: 2022-11-23 17:51:58
 * @FilePath: \src\src\pages\Task\components\TaskList\index.tsx
 * @Description:
 *
 * Copyright (c) 2022 by zyqqun 2450100414@qq.com, All Rights Reserved.
 */
import React, { useMemo, useState } from 'react';
import TaskItem from './TackItem';
import {
  PlusOutlined,
  ExclamationCircleFilled,
  DownOutlined,
  CalendarOutlined,
} from '@ant-design/icons';
import {
  Input,
  Tag,
  DatePicker as TDatePicker,
  Button,
  Modal,
  message,
  Dropdown,
  Space,
  Typography,
  Menu,
} from 'antd';
const moment = require('moment');
import './index.less';
import TaskDetail from './TaskDetail';
const { Search } = Input;
export interface taskT {
  taskID: string;
  title: string;
  desc: string;
  //startTime: string;
  endTime: moment.Moment;
  taskStatus: string;
}
let DatePicker: any = TDatePicker;
function TaskList() {
  const [isCreate, setIsCreate] = useState(false);
  const [curTitle, setCurTitle] = useState('');
  const [ddl, setDDL] = useState<moment.Moment>(moment());
  const [tasks, setTasks] = useState<taskT[]>([]);
  const [activeTaskKey, setActiveTaskKey] = useState(' ');
  const activeTask = useMemo(() => {
    return tasks.find((i) => i.taskID === activeTaskKey);
  }, [tasks, activeTaskKey]);

  //点击今天 明天 自定换时间
  const handleQuickCreate = (offset: number) => {
    const d = new Date();
    const time = d.toISOString().split('T')[0] + 'T10:00:00.000Z';
    let momentTime = moment(time).add(offset, 'd');
    setDDL(momentTime);
  };
  const handleSelectTime = (value: moment.Moment) => {
    setDDL(value);
  };

  const handleCreate = () => {
    const taskID = Date.now().toString();
    setTasks([
      ...tasks,
      {
        title: curTitle,
        endTime: ddl,
        desc: '',
        taskID: taskID,
        taskStatus: 'doing',
      },
    ]);
    setIsCreate(false);
    setCurTitle('');
    message.success({ content: '创建成功！', duration: 1 });
  };

  //直接删除任务
  const handleDelete = (taskID: string) => {
    const { confirm } = Modal;
    confirm({
      title: '确定要删除此项任务吗?',
      icon: <ExclamationCircleFilled />,
      okText: '确定',
      okType: 'danger',
      cancelText: '取消',
      onOk() {
        setTasks([...tasks.filter((i) => i.taskID !== taskID)]);
        message.success({ content: '删除成功！', duration: 1 });
      },
      onCancel() {},
    });
  };
  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <span onClick={() => console.log('nfnf')}>按开始时间排序</span>
          ),
        },
        {
          key: '2',
          label: (
            <span onClick={() => console.log('nfnf')}>按截止时间排序</span>
          ),
        },
      ]}
    />
  );

  return (
    <div className="task-list">
      <div className="task-list-top">
        <h1 className="title">任务列表</h1>
        <div className="left">
          <Search className="search" placeholder="搜索任务" />
          <Dropdown
            overlay={menu}
            placement="bottomRight"
            arrow={{ pointAtCenter: true }}
          >
            <Typography.Link>
              <Space>
                <CalendarOutlined />
                <DownOutlined />
              </Space>
            </Typography.Link>
          </Dropdown>
        </div>
      </div>
      <div
        className={`add-task-container ${
          isCreate ? 'add-task-container--active' : ''
        }`}
      >
        <div className="standard-container create-input">
          <PlusOutlined style={{ color: '#2679c6', fontSize: '2.5rem' }} />
          <Input
            placeholder="创建任务"
            value={curTitle}
            onChange={(e) => setCurTitle(e.target.value)}
            onFocus={() => setIsCreate(true)}
          />
        </div>
        {isCreate && (
          <div className="time-tags">
            <Tag
              color="green"
              onClick={() => {
                handleQuickCreate(0);
              }}
            >
              今天
            </Tag>
            <Tag
              color="red"
              onClick={() => {
                handleQuickCreate(1);
              }}
            >
              明天
            </Tag>
            <Tag
              color="blue"
              onClick={() => {
                handleQuickCreate(2);
              }}
            >
              后天
            </Tag>
            <Tag
              color="geekblue"
              onClick={() => {
                handleQuickCreate(7);
              }}
            >
              一周后
            </Tag>
            <DatePicker
              size="small"
              showTime
              onOk={handleSelectTime}
              placeholder="选择任务截止日期"
              value={ddl}
            />
            <div className="operation-btn">
              <Button
                type="primary"
                onClick={() => {
                  setIsCreate(false), setCurTitle('');
                }}
                style={{ marginRight: '5px' }}
              >
                取消
              </Button>
              <Button
                type="primary"
                onClick={handleCreate}
                disabled={curTitle === ''}
              >
                创建
              </Button>
            </div>
          </div>
        )}
      </div>
      <div className="task-item__container">
        {tasks.map((i) => (
          <TaskItem
            key={i.title}
            active={activeTaskKey === i.taskID}
            title={i.title}
            desc={i.desc}
            endTime={i.endTime}
            taskStatus={i.taskStatus}
            onUpload={() => {
              setActiveTaskKey(i.taskID);
            }}
            onEdit={() => setActiveTaskKey(i.taskID)}
            onDelete={() => handleDelete(i.taskID)}
          ></TaskItem>
        ))}
      </div>
      <TaskDetail
        task={activeTask}
        tasks={tasks}
        setTasks={setTasks}
        onClose={() => setActiveTaskKey('')}
      />
    </div>
  );
}

export default TaskList;
