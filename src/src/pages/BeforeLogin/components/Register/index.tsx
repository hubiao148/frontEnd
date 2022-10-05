import formValidation from '@/utils/formValidation';
import { Form, Input, Button, Checkbox } from 'antd';
import { Link } from 'umi';
import styles from './index.less';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

function RegForm() {
  return (
    <Form {...layout} name="basic" className={styles['register-form']}>
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input placeholder="昵称" />
      </Form.Item>

      <Form.Item
        name="account"
        rules={[
          { required: true, message: '' },
          { validator: formValidation.email || formValidation.mobile },
        ]}
      >
        <Input placeholder="xxxx@xx.com/手机号" />
      </Form.Item>

      <Form.Item
        name="password"
        style={{ marginBottom: '0px' }}
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password placeholder="设置密码" />
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
