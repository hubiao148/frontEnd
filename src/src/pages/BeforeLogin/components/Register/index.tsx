/*
 * @Author: hcy
 * @Date: 2022-10-05 14:25:37
 * @LastEditors: zyqqun 2450100414@qq.com
 * @LastEditTime: 2022-11-15 13:41:16
 * @FilePath: \src\src\pages\BeforeLogin\components\Register\index.tsx
 * @Description:
 *
 */
import { useCallback, useEffect, useState } from 'react';
import formValidation from '@/utils/formValidation';
import { Form, Input, Button, Checkbox, message, Divider } from 'antd';
import { UserOutlined, LockOutlined, TeamOutlined } from '@ant-design/icons';
import { Link, useHistory } from 'umi';
import { useDebounce } from '@/utils/useDebounce';
import styles from './index.less';
import { useAtom } from 'jotai';
import { titleAtom } from '../../index';
import Captcha from 'react-captcha-code';
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 18 },
};

function RegForm() {
  const [, setTitle] = useAtom(titleAtom);
  const history = useHistory();
  //图形验证码
  const [verification, setVerification] = useState(null);
  const handleClick = useCallback((captcha) => {
    setVerification(captcha);
  }, []);

  const onFinish = useDebounce(async (values: any) => {
    try {
      //todo接口
      setTitle('请登录账号');
      history.replace('/beforeLogin/login');
      message.success({ content: '注册成功！', duration: 1 });
    } catch (error) {
      message.error({ content: '注册失败！', duration: 1 });
    }
  }, 700);

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Form
        {...layout}
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className={styles['register-form']}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: '请输入您的昵称' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="昵称" />
        </Form.Item>

        <Form.Item
          name="account"
          validateTrigger="onBlur"
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
          getValueFromEvent={(event) => {
            return event.target.value.trim();
          }}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="设置密码(6-16)"
          />
        </Form.Item>

        <Form.Item
          name="confirm"
          hasFeedback
          validateTrigger="onBlur"
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
          <Input.Password prefix={<LockOutlined />} placeholder="确认密码" />
        </Form.Item>

        <Form.Item
          name="Verification"
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
          name="agree"
          style={{ marginBottom: '3px' }}
          valuePropName="checked"
        >
          <Checkbox style={{ fontSize: '1rem' }}>
            注册默认同意条款和隐私政策
          </Checkbox>
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
    </>
  );
}

export default RegForm;
