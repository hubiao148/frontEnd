import { useState } from 'react';
import styles from './index.less';
import { Button } from 'antd';
import { Decrypt, Encrypt } from '@/utils/cryptoAES';
import configEnv from '@/utils/configEnv';
import storage from '@/utils/storage';
export default function IndexPage() {
  const [count, setCount] = useState(0);
  let a = Encrypt('103170,112425366,253.00,20210428173700');
  console.log('加密：' + a);
  console.log('解密' + Decrypt(a) + configEnv.baseApi);
  storage.setItem('name', 'hcy');
  return (
    <div>
      <h1>hh</h1>
      <Button type="primary">he</Button>
      <h1 className={styles.title}>Page index {count}</h1>
      <Button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +1
      </Button>
    </div>
  );
}
