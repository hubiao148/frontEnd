/*
 * @Author: zyq
 * @Date: 2022-10-24 08:46:05
 * @Last Modified by: zyq
 * @Last Modified time: 2022-10-24 09:01:31
 */
import React from 'react';
import { Breadcrumb } from 'antd';

function modeDetail() {
  return (
    <div>
      <div className="menu">
        <Breadcrumb separator=">">
          <Breadcrumb.Item href="">实践案例</Breadcrumb.Item>
          <Breadcrumb.Item href="">案例详情</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="left">点赞收藏</div>
      <div className="content">文章详情</div>
    </div>
  );
}

export default modeDetail;
