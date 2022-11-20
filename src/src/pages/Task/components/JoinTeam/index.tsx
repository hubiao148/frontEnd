/*
 * @Author: hcy
 * @Date: 2022-11-09 17:28:28
 * @LastEditors: zyqqun 2450100414@qq.com
 * @LastEditTime: 2022-11-16 16:33:19
 * @FilePath: \src\src\pages\Task\components\JoinTeam\index.tsx
 * @Description: 加入团队
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
    <div className={styled.joinTeamWrapper}>
      <Card className={styled.memberCard} title="加入团队">
        <Form form={form} layout="vertical">
          <Row gutter={24} justify="center">
            <Col span={10}>
              <Form.Item name="inviteNumber" label="输入邀请码加入">
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
