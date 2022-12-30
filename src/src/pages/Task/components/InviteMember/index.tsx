/*
 * @Author: hcy
 * @Date: 2022-11-09 17:27:38
 * @LastEditors: zyqqun 2450100414@qq.com
 * @LastEditTime: 2022-12-30 13:26:31
 * @FilePath: \src\src\pages\Task\components\InviteMember\index.tsx
 * @Description: 邀请成员
 *
 */
import { getInviteCode } from '@/api/task';
import storage from '@/utils/storage';
import { Card, message, Form, Col, Row } from 'antd';
import { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styled from './index.less';

export default function index() {
  const [form] = Form.useForm();
  const [code, setCode] = useState('HGkL');

  const userId = storage.getItem('userMsg').id;
  useEffect(() => {
    getInviteCode(userId).then((res) => {
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
                {/**@ts-ignore */}
                <CopyToClipboard
                  onCopy={() => message.success('复制成功')}
                  text={code}
                >
                  <span>邀请码(可点击复制):{code}</span>
                </CopyToClipboard>
                {/* <span>邀请码:{code}</span> */}
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  );
}
