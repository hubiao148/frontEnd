/*
 * @Author: hcy
 * @Date: 2022-11-09 17:27:38
 * @LastEditors: zyqqun 2450100414@qq.com
 * @LastEditTime: 2022-11-16 09:58:26
 * @FilePath: \src\src\pages\Task\components\InviteMember\index.tsx
 * @Description: 邀请成员
 *
 */
import { Card, Button, Form, Input, Col, Row } from 'antd';
import styled from './index.less';

export default function index() {
  const [form] = Form.useForm();
  //清空表单
  const onReset = () => {
    form.resetFields();
  };
  return (
    <div className={styled.inviteMemberWrapper}>
      <Card className={styled.memberCard} title="邀请成员">
        <Form form={form} layout="vertical">
          <Row gutter={24} justify="center">
            <Col span={9}>
              <Form.Item name="stuNumber" label="输入学号邀请">
                <Input placeholder="填写队员学号" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24} justify="center">
            <Col span={9}>
              <Form.Item name="inviteNumber">
                <span>邀请码:BHJI</span>
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
