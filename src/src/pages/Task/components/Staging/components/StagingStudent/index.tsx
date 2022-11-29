/*
 * @Author: zyqqun
 * @Date: 2022-11-21 13:13:33
 * @LastEditors: zyqqun 2450100414@qq.com
 * @LastEditTime: 2022-11-29 14:28:38
 * @FilePath: \src\src\pages\Task\components\Staging\components\StagingStudent\index.tsx
 * @Description:
 *
 * Copyright (c) 2022 by zyqqun 2450100414@qq.com, All Rights Reserved.
 */
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Statistic, Tag } from 'antd';
import * as ec from 'echarts';
import './index.less';
import { getConfig } from './config';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import storage from '@/utils/storage';
const ResponsiveGridLayout = WidthProvider(Responsive);
interface Iprops {
  countResult: Record<string, number>;
}

const DEFAULT_LAYOUT = [
  { i: 'taskSuccess', x: 0, y: 0, w: 6, h: 6 },
  { i: 'taskRemain', x: 9, y: 0, w: 3, h: 4 },
  { i: 'taskSuccessNumber', x: 6, y: 4, w: 6, h: 4 },
  { i: 'search', x: 0, y: 6, w: 6, h: 5 },
  { i: 'taskAbort', x: 6, y: 0, w: 3, h: 4 },
];

const LAYOUT_LOCAL_KEY = 'reat-grid-layout';

function TaskStatistics(props: Iprops) {
  const { countResult } = props;
  const chartRef = useRef<ec.EChartsType>();
  const [layout, setLayout] = useState(
    storage.getItem(LAYOUT_LOCAL_KEY) || DEFAULT_LAYOUT,
  );

  //剩余任务数量
  const taskRemain = useMemo(() => {
    return countResult?.doing || 0;
  }, [countResult]);
  //已完成数量
  const taskFinish = useMemo(() => {
    return countResult?.done || 0;
  }, [countResult]);
  //已截止数量
  const taskAbort = useMemo(() => {
    return countResult?.abort || 0;
  }, [countResult]);
  useEffect(() => {
    const dom = document.getElementById('workspace-chart');
    if (dom) {
      const myChart = ec.init(dom);
      chartRef.current = myChart;
    }
  }, []);

  useEffect(() => {
    if (chartRef.current) {
      //图表的数据
      const dataSource = [
        {
          name: '进行中',
          value: countResult.doing,
        },
        {
          name: '已完成',
          value: countResult.done,
        },
      ];
      const option = getConfig(dataSource);
      chartRef.current.setOption(option);
    }
  }, [countResult]);
  const renderCards = () => {
    const cards = [
      {
        theme: 'purple-grey',
        title: '任务完成比',
        key: 'taskSuccess',
        content: () => (
          <div
            id="workspace-chart"
            style={{ width: '260px', height: '260px' }}
          ></div>
        ),
      },
      {
        theme: 'orange',
        title: '任务剩余量',
        key: 'taskRemain',
        content: () => (
          <div style={{ margin: '0px auto 0px 10px' }}>
            <Statistic title="剩余数量" value={taskRemain}></Statistic>
          </div>
        ),
      },
      {
        theme: 'yellow',
        title: '任务已截止量',
        key: 'taskAbort',
        content: () => (
          <div style={{ margin: '0px auto 0px 10px' }}>
            <Statistic title="截止数量" value={taskAbort}></Statistic>
          </div>
        ),
      },
      {
        theme: 'purple',
        title: '任务完成量',
        key: 'taskSuccessNumber',
        content: () => (
          <div style={{ margin: '0px auto 0px 10px' }}>
            <Statistic title="已完成数量" value={taskFinish}></Statistic>
          </div>
        ),
      },
      {
        theme: 'blue',
        title: '猜你想搜',
        key: 'search',
        content: () => (
          <div style={{ margin: '0px auto 0px 10px' }}>
            <Tag color="magenta">后端设计模式</Tag>
            <Tag color="red">防抖</Tag>
            <Tag color="volcano">AES加密</Tag>
            <Tag color="orange">分页</Tag>
            <Tag color="gold">axios二次封装</Tag>
          </div>
        ),
      },
    ];
    return cards.map((i) => (
      <div className={`card-container card-theme__${i.theme}`} key={i.key}>
        <div className="card-container__title">{i.title}</div>
        {i.content()}
      </div>
    ));
  };

  //卡片记忆
  const layoutChange = (L: any) => {
    chartRef.current?.resize();
    storage.setItem(LAYOUT_LOCAL_KEY, L);
  };

  return (
    <div className="card-containers">
      {/*@ts-ignore */}
      <ResponsiveGridLayout
        breakpoints={{ lg: 1200 }}
        layouts={{ lg: layout }}
        cols={{ lg: 12 }}
        rowHeight={30}
        style={{ width: '98%' }}
        onLayoutChange={layoutChange}
      >
        {renderCards()}
      </ResponsiveGridLayout>
    </div>
  );
}

export default TaskStatistics;
