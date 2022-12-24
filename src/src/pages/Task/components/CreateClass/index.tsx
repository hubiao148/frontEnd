/*
 * @Author: hcy
 * @Date: 2022-11-09 17:24:52
 * @LastEditors: hcy
 * @LastEditTime: 2022-12-24 17:42:44
 * @FilePath: \src\src\pages\Task\components\CreateClass\index.tsx
 * @Description: 创建项目
 *
 */
import { addClass } from '@/api/task/teacher';
import { FilePptOutlined } from '@ant-design/icons';
import {
  Button,
  Form,
  Input,
  Breadcrumb,
  DatePicker as TDatePicker,
  Col,
  Row,
  Select,
  Card,
  Upload,
  message
} from 'antd';
import { RcFile } from 'antd/lib/upload';
import { useState } from 'react';
import { Link } from 'umi';
import styled from './index.less';

let DatePicker: any = TDatePicker;
export default function index() {
  function fileUpload(e: RcFile): (string | boolean | void | File | Blob) | Promise<string | boolean | void | File | Blob> {
    throw new Error('Function not implemented.');
  }
  const [form] = Form.useForm();
  //清空表单
  const onReset = () => {
    form.resetFields();
  };
  //默认年级
  const [defaultYear] = useState((new Date()).getFullYear() - 2)
  function addClassByTeacher() {
    console.log(form.getFieldsValue())
    let data = {
      grade: form.getFieldsValue().grade,
      className: form.getFieldsValue().class,
    }
    addClass(data).then((res) => {
      console.log(res)
      message.success({ content: '添加年级成功！', duration: 1 });
    })
  }
  return (
    <div className={styled.createProWrapper}>
      <div className={styled['menu']}>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Link to="/task">实践任务</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/task/staging">工作台</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>创建班级</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className={styled.proForm}>
        <Card className={styled.memberCard} title="创建班级">
          <Form form={form} layout="vertical">
            <Row gutter={24} justify='center'>
              <Col span={8}>
                <Form.Item label="选择年级" name="grade">
                  <Select
                    defaultValue={defaultYear + '级'}
                    showSearch
                    placeholder="选择年级"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    }
                    options={[
                      {
                        value: '2018',
                        label: '2018级',
                      },
                      {
                        value: '2019',
                        label: '2019级',
                      },
                      {
                        value: '2020',
                        label: '2020级',
                      },
                      {
                        value: '2021',
                        label: '2021级',
                      },
                      {
                        value: '2022',
                        label: '2022级',
                      },
                      {
                        value: '2023',
                        label: '2023级',
                      },
                    ]}
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="选择班级" name="class">
                  <Select
                    defaultValue={'3' + '班'}
                    showSearch
                    placeholder="选择年级"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    }
                    options={[
                      {
                        value: '1',
                        label: '1班',
                      },
                      {
                        value: '2',
                        label: '2班',
                      },
                      {
                        value: '3',
                        label: '3班',
                      },
                    ]}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={24} justify='center'>
              <Col span={8}>
                <Form.Item label="以上传文件的方式添加" valuePropName="fileList">
                  <Upload.Dragger name="files" beforeUpload={(e) => fileUpload(e)}>
                    <p className="ant-upload-drag-icon">
                      <FilePptOutlined />
                    </p>
                    <p className="ant-upload-text">点击/拖拽/文档文件到此处上传</p>
                  </Upload.Dragger>
                </Form.Item>
              </Col>
              <Col span={8}></Col>
            </Row>
            <Row gutter={24} justify='center'>
              <Col span={8}>
                <Form.Item name="inviteNumber">
                  <span>邀请码:BHJI</span>
                </Form.Item>
              </Col>
              <Col span={8}></Col>
            </Row>
            <Row gutter={24} justify="center">
              <Col span={3}>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className={styled['form-button']}
                    onClick={addClassByTeacher}
                  >
                    确定
                  </Button>
                </Form.Item>
              </Col>
              <Col span={9}>
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
    </div >
  );
}


