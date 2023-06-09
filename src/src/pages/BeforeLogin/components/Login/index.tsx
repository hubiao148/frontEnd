/*
 * @Author: hcy
 * @Date: 2022-10-05 14:25:37
 * @LastEditors: hcy
 * @LastEditTime: 2022-10-31 22:52:05
 * @FilePath: \src\src\pages\BeforeLogin\components\Login\index.tsx
 * @Description:
 *
 */
import { useCallback, useEffect, useState } from 'react';
import { Encrypt } from '@/utils/cryptoAES';
import { Form, Input, Button, Checkbox, message, Divider } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import formValidation from '@/utils/formValidation';
import { useDebounce } from '@/utils/useDebounce';
import { Link, useHistory } from 'umi';
import styles from './index.less';
import storage from '@/utils/storage';
import Captcha from 'react-captcha-code';
import { BeforeLoginRequest } from '@/api/login/BeforeLogin'
import request from '@/api/api';
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 18 },
};
const tailLayout = {
  wrapperCol: { offset: 0, span: 18 },
};

function Login() {
  const history = useHistory();
  //图形验证码
  const [verification, setVerification] = useState(null);
  const handleClick = useCallback((captcha) => {
    setVerification(captcha);
  }, []);

  const onFinish = useDebounce((values: any) => {
    //登录，todo接口
    // BeforeLoginRequest({ phonenumber: "19634309086", password: "lpc123" }).then((res) => {
    //   console.log(res)
    //   storage.setItem('token', res.data.token);
    //   history.replace('/home');
    //   message.success({ content: '登录成功！', duration: 1 });
    // })
    request({
      url: '/umi/login', method: 'get', headers: {
        'Content-Type':
          'multipart/form-data;boundary = ' + new Date().getTime(),
      }, }).then((res) => {
      console.log(res)
      storage.setItem('token', res.data.token);
      history.replace('/home');
      message.success({ content: '登录成功！', duration: 1 });
    })

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
        rules={[{ required: true, message: '请输入密码' }]}
        getValueFromEvent={(event) => {
          return event.target.value.trim();
        }}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder="请输入密码"
        />
      </Form.Item>

      <Form.Item
        name="Verification"
        {...tailLayout}
        style={{ marginBottom: '0px' }}
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

      <Form.Item
        {...tailLayout}
        style={{ marginBottom: '0px' }}
        name="forgetPassword"
      >
        <Link to={'/forgetPassword'}>忘记了密码？</Link>
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
        >
          登录
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Login;
