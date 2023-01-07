import {
  Button,
  Col,
  DatePicker as TDatePicker,
  Form,
  Input,
  Row,
  Select,
  Upload,
  ConfigProvider,
  message
} from 'antd';
import styled from './index.less';
import {
  FilePptOutlined,
  InboxOutlined,
  PlusOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import type { RcFile } from 'antd/es/upload/interface';
import { useUsualFileUpload } from '@/utils/useUsualFileUpload';
import { useBigFileUpload } from '@/utils/useBigFileUpload';
import { useState } from 'react';
import { uploadTeach } from '@/api/techShare';
const moment = require('moment');
interface maskProps {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: maskProps['isModalOpen']) => void;
}

let DatePicker: any = TDatePicker;

export default function MaskForm({ isModalOpen, setIsModalOpen }: maskProps) {
  const [form] = Form.useForm();
  const onReset = () => {
    form.resetFields();
  };
  const [fileList, setFileList] = useState<any>([]);
  function upload(values: any) {
    let formData = new FormData();
    console.log('fileList', fileList);
    fileList.forEach((file: any) => {
      // formData.append(
      //   'files[]',
      //   new Blob([JSON.stringify(fileList)], { type: 'application/json' }),
      // );
      formData.append('files', file as RcFile);
    });
    console.log('formData', formData.getAll('files'));

    const groupId = values.groupId;
    const year = values.year;
    const techType = values.techType;
    const techShare = values.techShare;
    const dateTime = values.dateTime;

    formData.append('groupId', groupId); //组号
    formData.append('year', year); //班级年级 2020级4班
    formData.append('sceneId', techType); //类别 前端
    formData.append('techShare', techShare); //分享课题
    formData.append('date', moment(dateTime).format('YYYY-MM-DD HH:mm:ss')); //分享时间
    // console.log('fileList', fileList);

    uploadTeach(formData)
      .then((res:any) => {
        console.log(res);
        if (res.code == 500) {
          message.error({ content: '课题已存在！', duration: 1 });
          return false;
        } else {
          message.success({ content: '上传成功！', duration: 1 });
          return true;
        }
        
      })
      .catch((err: Error) => {
        console.log(err);
      });

    // fetch('https://4717v036u3.zicp.fun/techshare/designmode/add', {
    //   method: 'post',
    //   body: formData,
    //   // headers: {
    //   //   'Content-Type': 'multipart/form-data',
    //   // },
    // })
    //   .then((res) => res.text())
    //   .then((res) => console.log(res));
  }

  return (
    <ConfigProvider componentSize="large">
      <Form layout="vertical" form={form} onFinish={upload}>
        {/* 组号年级班级 */}
        <Row gutter={16} justify="center">
          <Col span={8}>
            <Form.Item
              name="groupId"
              label="组号"
              rules={[{ required: true, message: '请输入小组组号' }]}
            >
              <Input placeholder="请输入小组组号" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="year"
              label="年级/班级"
              // rules={[{ required: true, message: '请输入年级' }]}
            >
              <Select placeholder="请选择所在班级">
                <Select.Option value="2021级3班">2021级3班</Select.Option>
                <Select.Option value="2022级4班">2021级4班</Select.Option>
                <Select.Option value="2020级3班">2020级3班</Select.Option>
                <Select.Option value="2020级4班">2020级4班</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        {/* 前后端课题时间 */}
        <Row gutter={16} justify="center">
          <Col span={8}>
            <Form.Item
              name="techType"
              label="技术类别"
              rules={[{ required: true, message: '请输入类别' }]}
            >
              <Select placeholder="请选择技术方向">
                <Select.Option value="1">前端</Select.Option>
                <Select.Option value="2">后端</Select.Option>
                <Select.Option value="3">游戏开发</Select.Option>
                <Select.Option value="4">其它</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="techShare"
              label="技术分享课题"
              rules={[{ required: true, message: '请输入您的技术分享课题' }]}
            >
              <Input placeholder="技术分享课题" />
            </Form.Item>
          </Col>
        </Row>
        {/* 文件上传 */}
        <Row gutter={16} justify="center">
          <Col span={8}>
            <Form.Item label="文件上传" valuePropName="fileList">
              {/* <Upload.Dragger name="files" beforeUpload={(e) => upload(e)}>
                <p className="ant-upload-drag-icon">
                  <FilePptOutlined />
                </p>
                <p className="ant-upload-text">点击/拖拽/文档文件到此处上传</p>
              </Upload.Dragger> */}
              <Upload.Dragger
                beforeUpload={(file) => {
                  setFileList([...fileList, file]);
                  return false;
                }}
                onRemove={(file) => {
                  const index = fileList.indexOf(file);
                  const newFileList = fileList.slice();
                  newFileList.splice(index, 1);
                  setFileList(newFileList);
                }}
              >
                <p className="ant-upload-drag-icon">
                  <FilePptOutlined />
                </p>
                <p className="ant-upload-text">点击/拖拽/文档文件到此处上传</p>
              </Upload.Dragger>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="视频上传" valuePropName="fileList">
              <Upload.Dragger
                beforeUpload={(file) => {
                  setFileList([...fileList, file]);
                  return false;
                }}
                onRemove={(file) => {
                  const index = fileList.indexOf(file);
                  const newFileList = fileList.slice();
                  newFileList.splice(index, 1);
                  setFileList(newFileList);
                }}
              >
                <p className="ant-upload-drag-icon">
                  <FilePptOutlined />
                </p>
                <p className="ant-upload-text">点击/拖拽/视频到此处上传</p>
              </Upload.Dragger>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16} justify="center">
          <Col span={16}>
            <Form.Item
              name="dateTime"
              label="时间"
              // rules={[{ required: true, message: '请选择分享的日期' }]}
            >
              <DatePicker format="YYYY-MM-DD HH:mm:ss" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16} justify="center">
          <Col span={4}>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className={styled['form-button']}
                // onClick={upload}
              >
                提交
              </Button>
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item>
              <Button
                onClick={onReset}
                htmlType="button"
                className={styled['form-button']}
              >
                重置
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </ConfigProvider>
  );
}
