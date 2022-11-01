/*
 * @Author: zyq
 * @Date: 2022-10-22 21:14:44
 * @Last Modified by: zyq
 * @Last Modified time: 2022-10-22 22:18:57
 */

import { Input } from 'antd';
import Chart from './components';
import styled from './index.less';
import { useEffect, useState } from 'react';

const { Search } = Input;
export default function Graph() {
  const [graph, setGraph] = useState({ nodes: [], links: [], categories: [] });
  // 点击触发的函数
  const getData = async () => {
    console.log('热点技术详情页面');
  };

  useEffect(() => {
    fetch('/umi/chart')
      .then((res) => res.json())
      .then((res) => {
        // console.log(res.data);
        setGraph(res.data);
      });
  }, []);

  const option = {
    title: {
      text: '热点技术图谱',
      // subtext: 'Default layout',
      top: 'bottom',
      left: 'left',
    },
    tooltip: {},
    legend: [
      {
        selectedMode: 'single',
        data: graph.categories.map(function (a: any) {
          return a.name;
        }),
      },
    ],
    animationDuration: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
      {
        name: 'Les Miserables',
        type: 'graph',
        layout: 'none',
        data: graph.nodes,
        links: graph.links,
        categories: graph.categories,
        roam: true,
        label: {
          position: 'right',
          formatter: '{b}',
        },
        lineStyle: {
          color: 'source',
          curveness: 0.3,
        },
        emphasis: {
          focus: 'adjacency',
          lineStyle: {
            width: 10,
          },
        },
      },
    ],
  };

  return (
    <div className={styled['graphWrapper']}>
      <Search
        className={styled['search']}
        placeholder="搜索图谱节点"
        onSearch={getData}
      />
      <Chart option={option} />
    </div>
  );
}
