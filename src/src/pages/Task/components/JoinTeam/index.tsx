/*
 * @Author: hcy
 * @Date: 2022-11-09 17:28:28
 * @LastEditors: zyqqun 2450100414@qq.com
 * @LastEditTime: 2022-12-30 21:33:03
 * @FilePath: \src\src\pages\Task\components\JoinTeam\index.tsx
 * @Description: 加入团队
 *
 */
import { joinTeam } from '@/api/task';
import storage from '@/utils/storage';
import { Card, Button, Form, Input, Col, Row, message } from 'antd';
import styled from './index.less';

export default function index() {
  const [form] = Form.useForm();
  //清空表单
  const onReset = () => {
    form.resetFields();
  };

  const onFinish = (values: any) => {
    const userId = storage.getItem('userMsg').id;
    //加入团队的接口
    joinTeam({
      teamCode: values.inviteCode,
      userID: userId,
    }).then((res) => {
      // @ts-ignore
      if (res.meta.code == 500) {
        // @ts-ignore
        message.error({ content: res.meta.msg, duration: 2 });
      } else {
        message.success({ content: '加入成功！', duration: 1 });
      }
    });
  };

  return (
    <div className={styled.joinTeamWrapper}>
      <Card className={styled.memberCard} title="加入团队">
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Row gutter={24} justify="center">
            <Col span={10}>
              <Form.Item name="inviteCode" label="输入邀请码加入">
                <Input placeholder="请输入要加入团队的邀请码" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24} justify="center">
            <Col span={4}>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className={styled['form-button']}
                >
                  确定
                </Button>
              </Form.Item>
            </Col>
            <Col span={5}>
              <Form.Item>
                <Button
                  onClick={onReset}
                  htmlType="button"
                  className={styled['form-button']}
                >
                  取消
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  );
}
