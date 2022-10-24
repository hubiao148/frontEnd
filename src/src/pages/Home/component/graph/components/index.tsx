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
} from 'echarts/components';
import { GraphChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
echarts.use(CanvasRenderer);
echarts.use([GraphChart, TitleComponent, TooltipComponent]);
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

  return (
    <div
      ref={cRef}
      style={{
        width: '100vw',
        height: '500px',
        backgroundColor: 'rgb(21, 15, 63)',
      }}
    />
  );
};

export default Chart;
