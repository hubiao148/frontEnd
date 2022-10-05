import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import formValidation from '@/utils/formValidation';
import { useDebounce } from '@/utils/useDebounce';
import { Link } from 'umi';
import styles from './index.less';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 18 },
};
const tailLayout = {
  wrapperCol: { offset: 0, span: 16 },
};

function Login() {
  //实验防抖
  const login = useDebounce(() => {
    message.success({ content: '登录成功！', duration: 1 });
  }, 700);

  const onFinish = (values: any) => {
    console.log('Success:', values);
    //登录，todo接口
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      name="basic"
      className={styles['login-form']}
    >
      <Form.Item
        name="account"
        rules={[
          { required: true, message: '' },
          { validator: formValidation.validate },
        ]}
      >
        <Input
          prefix={<UserOutlined />}
          placeholder="请输入账号(邮箱/手机号)"
        />
      </Form.Item>

      <Form.Item
        name="password"
        style={{ marginBottom: '0px' }}
        rules={[{ required: true, message: '请输入密码' }]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder="请输入密码"
        />
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
          onClick={login}
        >
          登录
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Login;
