import { useCallback, useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { useDebounce } from '@/utils/useDebounce';
import Captcha from 'react-captcha-code';
import styled from './index.less';
const layout = {
  labelCol: { span: 8 },
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
function SetPassword({ account, setAccount, setCurrent }: Props) {
  //图形验证码
  const [verification, setVerification] = useState(null);
  const handleClick = useCallback((captcha) => {
    setVerification(captcha);
  }, []);
  const onFinish = useDebounce((values: any) => {
    //确认修改，todo接口
    setCurrent(2);
  }, 700);

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Form
      {...layout}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      name="basic"
      className={styled['set-form']}
      hideRequiredMark
    >
      <Form.Item
        label="新密码"
        name="password"
        rules={[{ required: true, message: '请设置新密码' }]}
        getValueFromEvent={(event) => {
          return event.target.value.trim();
        }}
      >
        <Input.Password placeholder="新密码(6-16)" />
      </Form.Item>

      <Form.Item
        label="确认密码"
        name="confirm"
        hasFeedback
        getValueFromEvent={(event) => {
          return event.target.value.trim();
        }}
        rules={[
          { required: true, message: '请再次输入密码' },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject('密码确认不一致！');
            },
          }),
        ]}
      >
        <Input.Password placeholder="确认密码" />
      </Form.Item>

      <Form.Item label="账号">
        {account}
        <span
          style={{ margin: '0 30px', color: '#5889de', cursor: 'pointer' }}
          onClick={() => {
            setCurrent(0);
          }}
        >
          修改
        </span>
      </Form.Item>

      <Form.Item
        label="验证"
        name="Verification"
        {...tailLayout}
        rules={[
          { required: true, message: '请输入验证码' },
          () => ({
            validator(rule, value) {
              if (!value || verification === value) {
                return Promise.resolve();
              }
              return Promise.reject('验证码错误');
            },
          }),
        ]}
      >
        <Input
          suffix={
            <Captcha
              charNum={4}
              onChange={handleClick}
              height={30}
              width={70}
              bgColor={'rgb(255, 255, 255)'}
            />
          }
          placeholder="请输入验证码"
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className={styled['submit-button']}
        >
          确认修改
        </Button>
      </Form.Item>
    </Form>
  );
}

export default SetPassword;
function setCurrent(arg0: number) {
  throw new Error('Function not implemented.');
}
