/*
 * @Author: hcy
 * @Date: 2022-10-05 14:25:37
 * @LastEditors: hcy
 * @LastEditTime: 2022-10-05 20:48:56
 * @FilePath: \src\src\pages\BeforeLogin\components\Login\index.tsx
 * @Description: 
 * 
 */
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link,useHistory } from 'umi';
import styles from './index.less';
import storage from '@/utils/storage';

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
    storage.setItem('token','sdsdsfsdf');
    history.push('/home')
  }
  return (
    <Form {...layout} name="basic" className={styles['login-form']}>
      <Form.Item
        name="account"
        rules={[{ required: true, message: 'Please input your account!' }]}
      >
        <Input
          prefix={<UserOutlined />}
          placeholder="请输入账号(邮箱/手机号)"
        />
      </Form.Item>

      <Form.Item
        name="password"
        style={{ marginBottom: '0px' }}
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password placeholder="请输入密码" />
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
          onClick={goHome}
        >
          登录
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Login;
