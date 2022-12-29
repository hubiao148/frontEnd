/*
 * @Author: hcy
 * @Date: 2022-11-09 17:27:38
 * @LastEditors: zyqqun 2450100414@qq.com
 * @LastEditTime: 2022-12-25 14:42:57
 * @FilePath: \src\src\pages\Task\components\InviteMember\index.tsx
 * @Description: 邀请成员
 *
 */
import { getInviteCode } from '@/api/task';
import { Card, Button, Form, Input, Col, Row } from 'antd';
import { useEffect, useState } from 'react';
import styled from './index.less';

export default function index() {
  const [form] = Form.useForm();
  const [code, setCode] = useState(null);
  //清空表单
  const onReset = () => {
    form.resetFields();
  };
  useEffect(() => {
    getInviteCode(20).then((res) => {
      console.log(res.data.code);
      setCode(res.data.code);
    });
  }, []);
  return (
    <div className={styled.inviteMemberWrapper}>
      <Card className={styled.memberCard} title="邀请成员">
        <Form form={form} layout="vertical">
          {/* <Row gutter={24} justify="center">
            <Col span={9}>
              <Form.Item name="stuNumber" label="输入学号邀请">
                <Input placeholder="填写队员学号" />
              </Form.Item>
            </Col>
          </Row> */}
          <Row gutter={24} justify="center">
            <Col span={9}>
              <Form.Item name="inviteNumber">
                <span>邀请码:{code}</span>
              </Form.Item>
            </Col>
          </Row>
          {/* <Row gutter={24} justify="center">
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
          </Row> */}
        </Form>
      </Card>
    </div>
  );
}
