import { Form, Input, Button, Checkbox } from 'antd';
import { useEffect } from 'react';
import { Link } from 'umi';
import styles from './RegForm.less';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 0, span: 16 },
};

function RegForm() {
  return (
    <Form {...layout} name="basic" className={styles['register-form']}>
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="account"
        rules={[{ required: true, message: 'Please input your account!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        style={{ marginBottom: '0px' }}
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="agree"
        style={{ marginBottom: '3px' }}
        valuePropName="checked"
      >
        <Checkbox>注册默认同意条款和隐私政策</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className={styles['login-button']}
        >
          注册
        </Button>
      </Form.Item>
    </Form>
  );
}

export default RegForm;
