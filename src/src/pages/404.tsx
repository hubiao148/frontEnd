import React, { useState } from 'react';
import styles from './index.less';
import { Button } from 'antd';
import { useDebounce } from '@/utils/useDebounce';

export default function IndexPage() {
  const [value, setValue] = useState(1);
  const run = useDebounce(() => {
    setValue(value + 1);
  }, 500);
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>------------</p>
      <p style={{ marginTop: 16 }}> Clicked count: {value} </p>
      <Button onClick={run}>Click fast!</Button>
    </div>
  );
}
