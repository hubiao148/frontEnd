/*
 * @Author: zyqqun
 * @Date: 2022-11-21 13:44:01
 * @LastEditors: zyqqun 2450100414@qq.com
 * @LastEditTime: 2022-11-21 17:02:23
 * @FilePath: \umi3\src\pages\reactGrid\components\TaskStatistics\config.ts
 * @Description:
 *
 * Copyright (c) 2022 by zyqqun 2450100414@qq.com, All Rights Reserved.
 */
export const getConfig = (data: { name: string; value: number }[]) => {
  const option = {
    tooltip: {
      trigger: 'item',
    },
    series: [
      {
        name: '任务完成比',
        type: 'pie',
        radius: ['50%', '80%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderWidth: 2,
        },
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '20',
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: data,
      },
    ],
  };

  return option;
};
