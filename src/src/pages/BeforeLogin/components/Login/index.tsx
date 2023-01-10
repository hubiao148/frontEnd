/*
 * @Author: hcy
 * @Date: 2022-10-05 14:25:37
 * @LastEditors: zyqqun 2450100414@qq.com
 * @LastEditTime: 2022-12-31 11:24:42
 * @FilePath: \src\src\pages\BeforeLogin\components\Login\index.tsx
 * @Description:登录
 *
 */
import { useCallback, useEffect, useState } from 'react';
import { Encrypt } from '@/utils/cryptoAES';
import {
  Form,
  Input,
  Button,
  Checkbox,
  message,
  ConfigProvider,
  Modal,
} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import formValidation from '@/utils/formValidation';
import { useDebounce } from '@/utils/useDebounce';
import { Link, useHistory } from 'umi';
import styles from './index.less';
import storage from '@/utils/storage';
import Captcha from 'react-captcha-code';
import { BeforeLoginRequest } from '@/api/login/BeforeLogin';
import request from '@/api/api';
// import { Vertify } from '@alex_xu/react-slider-vertify';
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 18 },
};
const tailLayout = {
  wrapperCol: { offset: 0, span: 18 },
};

function Login() {
  const history = useHistory();
  // const [vertify, setVertify] = useState<boolean>(false);
  // const [open, setOpen] = useState(false);
  //图形验证码
  const [verification, setVerification] = useState(null);
  const handleClick = useCallback((captcha) => {
    setVerification(captcha);
  }, []);

  const onFinish = useDebounce((values: any) => {
    const acccount = values.account;
    const passsword = values.password;
    // request({
    //   url: '/login',
    //   method: 'get',
    // }).then((res) => {
    //   console.log(res);
    //   storage.setItem('userMsg', res.data.userMsg);
    //   storage.setItem('token', res.data.token);
    //   history.replace('/home');
    //   message.success({ content: '登录成功！', duration: 1 });
    // });

    //AES加密
    const password = Encrypt(values.password);
    const account = Encrypt(values.account);
    //登录，todo接口
    BeforeLoginRequest({
      phonenumber: acccount,
      password: passsword,
    }).then((res) => {
      console.log(res);
      storage.setItem('userMsg', res.data.userMsg);
      storage.setItem('token', res.data.token);
      storage.setItem('roleId', res.data.roleId);
      history.replace('/home');
      message.success({ content: '登录成功！', duration: 1 });
    });
    console.log('加密', account, password);
  }, 700);

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <ConfigProvider componentSize="large">
      <Form
        {...layout}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        name="basic"
        className={styles['login-form']}
      >
        <Form.Item
          name="account"
          validateTrigger="onBlur"
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
          validateTrigger="onBlur"
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
          <Link to={'/forgetPassword'}>忘记密码？</Link>
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
    </ConfigProvider>
  );
}

export default Login;
