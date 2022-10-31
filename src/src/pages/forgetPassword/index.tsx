import { Button, message, Steps } from 'antd';
import React, { useState } from 'react';
import SetPassword from './setPassword';
import Success from './success';
import VerifyPassword from './verifyPassword';
import styled from './index.less';
const { Step } = Steps;

function ForgetPassword() {
  const [account, setAccount] = useState('');
  const [current, setCurrent] = useState(0);
  const steps = [
    {
      title: 'First',
      content: (
        <VerifyPassword
          account={account}
          setAccount={setAccount}
          setCurrent={setCurrent}
        />
      ),
    },
    {
      title: 'Second',
      content: (
        <SetPassword
          account={account}
          setAccount={setAccount}
          setCurrent={setCurrent}
        />
      ),
    },
    {
      title: 'Last',
      content: <Success />,
    },
  ];
  const onChange = (value: number) => {
    console.log('onChange:', value);
    setCurrent(value);
  };

  return (
    <div className={styled['forgetWrapper']}>
      <div className={styled['forgetContent']}>
        <Steps current={current} onChange={onChange}>
          <Step title="确认账号" />
          <Step title="重置密码" />
          <Step disabled title="重置成功" />
        </Steps>
        <div className={styled['steps-content']}>{steps[current].content}</div>
      </div>
    </div>
  );
}

export default ForgetPassword;
