/*
 * @Author: zyqqun
 * @Date: 2022-10-22 21:16:40
 * @LastEditors: zyqqun 2450100414@qq.com
 * @LastEditTime: 2023-01-05 16:20:19
 * @FilePath: \src\src\pages\Home\component\graph\components\index.tsx
 * @Description:
 *
 * Copyright (c) 2022 by zyqqun 2450100414@qq.com, All Rights Reserved.
 */
import { useEffect, useRef } from 'react';
import * as echarts from 'echarts/core';
import {
  DatasetComponentOption,
  DataZoomComponentOption,
  GridComponentOption,
  LegendComponentOption,
  TitleComponentOption,
  ToolboxComponentOption,
  TooltipComponentOption,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from 'echarts/components';
import { GraphChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
echarts.use(CanvasRenderer);
echarts.use([GraphChart, TitleComponent, TooltipComponent, LegendComponent]);
export type MyChartOption = echarts.ComposeOption<
  | DatasetComponentOption
  | DataZoomComponentOption
  | GridComponentOption
  | LegendComponentOption
  | TitleComponentOption
  | ToolboxComponentOption
  | TooltipComponentOption
>;

export interface MyChartProps {
  option: MyChartOption;
}

const Chart: React.FC<MyChartProps | any> = ({ option }) => {
  const cRef = useRef<HTMLDivElement>(null);
  const cInstance = useRef<echarts.EChartsType>();

  // 初始化注册组件，监听 cRef 和 option 变化
  useEffect(() => {
    if (cRef.current) {
      // 校验 Dom 节点上是否已经挂载了 ECharts 实例，只有未挂载时才初始化
      cInstance.current = echarts.getInstanceByDom(cRef.current);
      if (!cInstance.current) {
        cInstance.current = echarts.init(cRef.current, undefined, {
          renderer: 'svg',
        });
      }
      // 设置配置项
      if (option) cInstance.current?.setOption(option);
    }
  }, [cRef, option]);

  cInstance.current?.on('click', function (params) {
    //console.log(params.data?.url);
    // if (params.name == "搜索引擎") {
    //window.location.href = params.data?.url;
    //window.open(params.data?.url, '_black');
    // }
  });

  return (
    <div
      ref={cRef}
      style={{
        height: '500px',
        backgroundColor: 'rgb(21, 15, 63)',
      }}
    />
  );
};

export default Chart;
