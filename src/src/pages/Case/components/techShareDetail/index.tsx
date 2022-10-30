import React from 'react';
import styled from './index.less';
import { Breadcrumb } from 'antd';
import { Link } from 'umi';
import Article from './Article';

function TechShareDetail() {
  return (
    <div className={styled['DetailWrapper']}>
      <div className={styled['menu']}>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Link to="/techShare">技术分享</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>技术分享详情</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className={styled['DetailContent']}>
        <Article />
      </div>
    </div>
  );
}

export default TechShareDetail;
