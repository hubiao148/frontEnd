/*
 * @Author: zyq
 * @Date: 2022-10-22 21:14:44
 * @Last Modified by: zyq
 * @Last Modified time: 2022-10-22 22:18:57
 */
import { useEffect, useState } from 'react';
import { Input, ConfigProvider } from 'antd';
import Chart from './components';
import styled from './index.less';
import { useHistory } from 'umi';

const { Search } = Input;
export default function Graph() {
  const history = useHistory();
  const [graph, setGraph] = useState({ nodes: [], links: [], categories: [] });
  // // 点击触发的函数
  // const getData = async () => {
  //   console.log('热点技术详情页面');
  // };

  useEffect(() => {
    fetch('/umi/chart')
      .then((res) => res.json())
      .then((res) => {
        // console.log(res.data);
        setGraph(res.data);
      });
  }, []);

  //将大小比较大的名字显示出来
  graph.nodes.forEach(function (node: any) {
    node.label = {
      show: node.symbolSize > 30,
    };
  });

  const option = {
    title: {
      text: '热点技术图谱',
      // subtext: 'Default layout',
      top: 'bottom',
      left: 'left',
      textStyle: {
        color: '#cacaca',
      },
    },
    tooltip: {},
    legend: [
      {
        //selectedMode: 'single',单个单个显示
        orient: 'vertical',
        x: 'left', //可设定图例在左、右、居中
        y: 'center', //可设定图例在上、下、居中
        padding: [0, 0, 0, 50], //可设定图例[距上方距离，距右方距离，距下方距离，距左方距离]
        textStyle: {
          color: '#cacaca',
        },
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
      <ConfigProvider componentSize="large">
        <Search
          className={styled['search']}
          placeholder="搜索图谱节点"
          onSearch={() => {
            history.push('/search');
          }}
        />
      </ConfigProvider>
      <Chart option={option} />
    </div>
  );
}
