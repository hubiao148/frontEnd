/*
 * @Author: hcy
 * @Date: 2022-11-09 16:24:47
 * @LastEditors: hcy
 * @LastEditTime: 2022-11-20 15:48:57
 * @FilePath: \src\src\pages\Task\components\CreateClass\index.tsx
 * @Description: 创建班级
 * 
 */
import React from 'react'
import { Breadcrumb } from 'antd'
import style from './index.less'
import { useHistory } from 'umi';
export default function index() {
  const history = useHistory();
  function goBack() {
    history.go(-1);
  }
  return (
    <div className={style.container}>
      <div className={style.top}>
        <Breadcrumb separator=">" style={{ cursor: 'pointer' }}>
          <Breadcrumb.Item onClick={goBack}>技术问答</Breadcrumb.Item>
          <Breadcrumb.Item>创建班级</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="body">
        
      </div>
    </div>
  )
}
