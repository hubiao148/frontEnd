import React, { useState } from 'react';
import { Form, Input, message, Button } from 'antd';
import formValidation from '@/utils/formValidation';
import { useDebounce } from '@/utils/useDebounce';
import styled from './index.less';

const layout = {
  labelCol: { span: 16 },
  wrapperCol: { span: 24 },
};
interface Props {
  account: string;
  setAccount: (setAccount: Props['account']) => void;
  setCurrent: (setCurrent: number) => void;
}
function VerifyPassword({ setAccount, setCurrent }: Props) {
  const onFinish = useDebounce((values: any) => {
    //确认账户，todo接口
    setAccount(values.account);
    setCurrent(1);
  }, 700);

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <Form
        {...layout}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        name="basic"
        className={styled['verify-form']}
      >
        <Form.Item
          name="account"
          rules={[
            { required: true, message: '' },
            { validator: formValidation.validate },
          ]}
        >
          <Input placeholder="请输入绑定的邮箱/手机号" />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className={styled['submit-button']}
          >
            确认
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default VerifyPassword;
