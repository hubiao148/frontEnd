/*
 * @Author: zyq
 * @Date: 2022-10-04 16:12:04
 * @Last Modified by: zyq
 * @Last Modified time: 2022-10-04 16:26:36
 */

import React, { useState } from 'react';
import {
  history,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from 'umi';
import { Result, Button } from 'antd';
export default function NotFound() { //404页面
  const history = useHistory();
  const goBack = () => {
    history.push('/');
  };
  return (
    <div>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" onClick={goBack}>
            返回首页
          </Button>
        }
      />
    </div>
  );
}
