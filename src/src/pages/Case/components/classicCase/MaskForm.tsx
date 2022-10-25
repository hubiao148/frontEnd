import React from 'react';
import type { DatePickerProps } from 'antd';
import {
  Button,
  Col,
  DatePicker as TDatePicker,
  Form,
  Input,
  Row,
  Select,
} from 'antd';
interface maskProps {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: maskProps['isModalOpen']) => void;
}

let DatePicker: any = TDatePicker;
export default function MaskForm({ isModalOpen, setIsModalOpen }: maskProps) {
  return (
    <div>
      <Form layout="vertical" hideRequiredMark>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="group"
              label="组号"
              rules={[{ required: true, message: '请输入小组组号' }]}
            >
              <Input placeholder="请输入小组组号" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="class"
              label="班级"
              rules={[{ required: true, message: '请输入班级' }]}
            >
              <Input placeholder="请输入班级" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="year"
              label="年级"
              rules={[{ required: true, message: '请输入年级' }]}
            >
              <Input placeholder="请输入年级" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="techShare"
              label="技术分享课题"
              rules={[{ required: true, message: '请输入您的技术分享课题' }]}
            >
              <Input placeholder="技术分享课题" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="dateTime"
              label="时间"
              rules={[{ required: true, message: '请选择分享的日期' }]}
            >
              <DatePicker />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="description"
              label="备注"
              rules={[
                {
                  required: false,
                  message: '添加技术分享备注',
                },
              ]}
            >
              <Input.TextArea rows={4} placeholder="添加技术分享备注" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
