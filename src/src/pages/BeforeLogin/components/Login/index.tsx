/*
 * @Author: hcy
 * @Date: 2022-10-05 12:20:04
 * @LastEditors: hcy
 * @LastEditTime: 2022-10-05 14:49:18
 * @FilePath: \src\src\pages\BeforeLogin\components\Login\index.tsx
 * @Description: 
 * 
 */
import { Form, Input, Button, Checkbox } from 'antd';
import { useEffect } from 'react';
import { Link ,useHistory  } from 'umi';
import styles from './index.less';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 0, span: 16 },
};

function Login() {
  const history = useHistory();
  function goHome() {
    history.push('/home');
  }
  return (
    <Form {...layout} name="basic" className={styles['login-form']}>
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
        {...tailLayout}
        style={{ marginBottom: '0px' }}
        name="forgetPassword"
      >
        <Link to={''}>忘记了密码？</Link>
      </Form.Item>

      <Form.Item
        name="remember"
        style={{ marginBottom: '3px' }}
        valuePropName="checked"
      >
        <Checkbox>记住我</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className={styles['login-button']}
          onClick = {goHome}
        >
          登录
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Login;
