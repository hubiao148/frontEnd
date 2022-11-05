import React, { useCallback, useState } from 'react';
import { Form, Input, Button, Space, message } from 'antd';
import formValidation from '@/utils/formValidation';
import { useDebounce } from '@/utils/useDebounce';
import styled from './index.less';
import { getVerifyCode } from '@/api/login/BeforeLogin';
import YzmButton from './yzmButton';

const layout = {
  wrapperCol: { span: 18 },
};
const tailLayout = {
  wrapperCol: { offset: 0, span: 18 },
};
interface Props {
  account: string;
  setAccount: (setAccount: Props['account']) => void;
  setCurrent: (setCurrent: number) => void;
}
function VerifyPassword({ account, setAccount, setCurrent }: Props) {
  const [time] = useState(60);
  const onFinish = useDebounce((values: any) => {
    //确认账户，todo接口
    setAccount(values.account);
    setCurrent(1);
  }, 700);

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const getVerify = () => {
    //获取验证码验证身份
    let callbackRes = true;
    getVerifyCode(account).then((res: any) => {
      if (res.code === -1) {
        message.error(res.message);
        callbackRes = false;
      } else if (res.code === 500) {
        message.error(res.message);
        callbackRes = false;
      } else {
        callbackRes = true;
      }
    });
    return callbackRes;
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
        {/* 验证码验证 */}
        <Form.Item
          {...tailLayout}
          name="Verification"
          rules={[{ required: true, message: '请输入验证码' }]}
        >
          <Space>
            <Input placeholder="请输入验证码" />
            <YzmButton onClick={getVerify} time={time} />
            {/* <Button onClick={getVerify} type="primary">
              获取验证码
            </Button> */}
          </Space>
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
