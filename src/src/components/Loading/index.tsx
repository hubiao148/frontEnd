/*
 * @Author: hcy
 * @Date: 2022-10-08 19:42:23
 * @LastEditors: hcy
 * @LastEditTime: 2022-10-14 20:21:03
 * @FilePath: \src\src\components\Loading\index.tsx
 * @Description: 
 * 
 */
import React from 'react';
import { Spin } from 'antd';
import style from './index.less'
function Loading() {
  return (
    <div className={style.loading}>
      <Spin size="large" />
    </div>
  );
}

export default Loading;
