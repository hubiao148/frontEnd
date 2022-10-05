/*
 * @Author: hcy
 * @Date: 2022-10-05 14:25:37
 * @LastEditors: hcy
 * @LastEditTime: 2022-10-05 18:26:58
 * @FilePath: \src\src\pages\BeforeLogin\components\Register\index.tsx
 * @Description: 
 * 
 */
import formValidation from '@/utils/formValidation';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined, TeamOutlined } from '@ant-design/icons';
import { Link } from 'umi';
import styles from './index.less';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 18 },
};

function RegForm() {
  return (
    <Form {...layout} name="basic" className={styles['register-form']}>
      <Form.Item
        name="username"
        rules={[{ required: true, message: '请输入您的昵称' }]}
      >
        <Input prefix={<UserOutlined />} placeholder="昵称" />
      </Form.Item>

      <Form.Item
        name="account"
        rules={[
          { required: true, message: '' },
          { validator: formValidation.validate },
        ]}
      >
        <Input prefix={<TeamOutlined />} placeholder="xxxx@xx.com/手机号" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: '请设置密码' }]}
      >
        <Input.Password prefix={<LockOutlined />} placeholder="设置密码" />
      </Form.Item>

      <Form.Item
        name="confirm"
        hasFeedback
        style={{ marginBottom: '0px' }}
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
        <Input.Password prefix={<LockOutlined />} placeholder="确认密码" />
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
