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
import { useDebounce } from '@/utils/useDebounce';

export default function NotFound() {
  const history = useHistory();
  // const [value, setValue] = useState(1);
  // const run = useDebounce(() => {
  //   setValue(value + 1);
  // }, 500);

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
      {/* <p>------------</p>
      <p style={{ marginTop: 16 }}> Clicked count: {value} </p>
      <Button onClick={run}>Click fast!</Button> */}
    </div>
  );
}
