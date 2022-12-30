/*
 * @Author: zyqqun
 * @Date: 2022-11-21 21:22:16
 * @LastEditors: zyqqun 2450100414@qq.com
 * @LastEditTime: 2022-12-30 20:52:55
 * @FilePath: \src\src\pages\Task\components\TaskList\index.tsx
 * @Description:
 *
 * Copyright (c) 2022 by zyqqun 2450100414@qq.com, All Rights Reserved.
 */
import React, { useEffect, useMemo, useState } from 'react';
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
  ConfigProvider,
} from 'antd';
const moment = require('moment');
import './index.less';
import TaskDetail from './TaskDetail';
import {
  createTask,
  deleteTask,
  getGroupId,
  getMissionList,
  searchTask,
} from '@/api/task';
import storage from '@/utils/storage';
const { Search } = Input;
export interface taskT {
  id: number;
  taskName: string;
  // desc: string;
  //startTime: string;
  deadline: any;
  sta: string;
}
let DatePicker: any = TDatePicker;
function TaskList() {
  const [isCreate, setIsCreate] = useState(false);
  //任务名称
  const [curTitle, setCurTitle] = useState('');
  //截至时间
  const [ddl, setDDL] = useState(moment());
  const [tasks, setTasks] = useState<taskT[]>([]);
  const [activeTaskKey, setActiveTaskKey] = useState<number>(0);
  const activeTask = useMemo(() => {
    return tasks?.find((i) => i.id === activeTaskKey);
  }, [tasks, activeTaskKey]);
  //页面展示得时候就请求一次user
  const [groupId, setGroupId] = useState<number>();
  const [searchValue, setSearchValue] = useState('');

  //搜索任务
  const getData = () => {
    searchTask(searchValue).then((res) => {
      console.log(res);
      setTasks(res?.data?.tasks);
    });
  };
  const userId = storage.getItem('userMsg').id;
  useEffect(() => {
    getGroupId(userId).then((res) => {
      // console.log(res.groupId);
      //@ts-ignore
      setGroupId(res.groupId);
    });
  }, []);
  //获取任务列表
  const missionList = () => {
    getMissionList(groupId).then((res) => {
      console.log(res);
      setTasks(res?.data?.tasks);
    });
  };
  useEffect(() => {
    // console.log('groupId', groupId);
    missionList();
  }, [groupId, activeTask?.sta]);
  //点击今天 明天 自定换时间
  const handleQuickCreate = (offset: number) => {
    const d = new Date();
    const time = d.toISOString().split('T')[0] + 'T10:00:00.000Z';
    let momentTime = moment(time).add(offset, 'd');
    setDDL(momentTime);
    //setDDL(d);
  };
  const handleSelectTime = (value: moment.Moment) => {
    setDDL(value);
  };

  const handleCreate = () => {
    createTask({
      taskName: curTitle,
      deadline: moment(ddl).format('YYYY-MM-DD HH:mm:ss'),
      groupId: groupId,
    }).then((res) => {
      console.log(res.data.mission);
      setTasks([
        ...tasks,
        {
          id: res.data.mission[0].id,
          taskName: res.data.mission[0].taskName,
          // desc: string;
          //startTime: string;
          deadline: res.data.mission[0].deadline,
          sta: res.data.mission[0].sta,
        },
      ]);
      setIsCreate(false);
      setCurTitle('');
      message.success({ content: '创建成功！', duration: 1 });
    });

    // message.success({ content: '创建成功！', duration: 1 });
  };

  //直接删除任务
  const handleDelete = (taskID: number) => {
    const { confirm } = Modal;
    confirm({
      title: '确定要删除此项任务吗?',
      icon: <ExclamationCircleFilled />,
      okText: '确定',
      okType: 'danger',
      cancelText: '取消',
      onOk() {
        deleteTask(taskID).then((res) => {
          missionList();
          message.success({ content: '删除成功！', duration: 1 });
        });
        // setTasks([...tasks.filter((i) => i.id !== taskID)]);
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
          <ConfigProvider componentSize="large">
            <Search
              className="search"
              onSearch={getData}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
              placeholder="搜索任务"
            />
          </ConfigProvider>
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
          <ConfigProvider componentSize="large">
            <Input
              placeholder="创建任务"
              value={curTitle}
              onChange={(e) => setCurTitle(e.target.value)}
              onFocus={() => setIsCreate(true)}
            />
          </ConfigProvider>
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
        {tasks?.map((i) => (
          <TaskItem
            key={i.taskName}
            active={activeTaskKey === i.id}
            taskName={i.taskName}
            // desc={i.desc}
            deadline={i.deadline}
            sta={i.sta}
            onUpload={() => {
              setActiveTaskKey(i.id);
            }}
            onEdit={() => setActiveTaskKey(i.id)}
            onDelete={() => handleDelete(i.id)}
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
