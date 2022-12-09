/*
 * @Author: zyq
 * @Date: 2022-10-24 08:46:05
 * @Last Modified by: zyq
 * @Last Modified time: 2022-10-30 19:51:42
 */
import React from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'umi';
import Article from './Article';
import styled from './index.less';

function modeDetail(props: { match: { params: { id: any } } }) {
  //路由接参数
  const { id } = props.match.params;
  return (
    <div className={styled['DetailWrapper']}>
      <div className={styled['menu']}>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Link to="/case">实践案例</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>案例详情</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className={styled['DetailContent']}>
        <Article id={id} />
      </div>
    </div>
  );
}

export default modeDetail;
