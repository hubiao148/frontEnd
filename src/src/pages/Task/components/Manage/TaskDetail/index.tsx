import {
  Input,
  Form,
  Row,
  Col,
  Button,
  Drawer,
  Upload,
  message,
  ConfigProvider,
} from 'antd';
import { FilePptOutlined } from '@ant-design/icons';
import type { RcFile } from 'antd/es/upload/interface';
import { taskT } from '../index';
import { useState } from 'react';
import moment from 'moment';
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 7 },
  },
};

interface IProps {
  task?: taskT; //被点击的那个任务
  groupId?: number;
  onClose: () => void;
  tasks: taskT[]; //所有任务
  setTasks: any;
}

function TaskDetail(props: IProps) {
  const { task, onClose, tasks, setTasks } = props;
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState<any>([]);
  const onReset = () => {
    onClose();
    form.resetFields();
  };

  const handleSubmit = (values: any) => {
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

    // uploadTTask(formData)
    //   .then((res) => {
    //     console.log(res);
    //     return true;
    //   })
    //   .catch((err: Error) => {
    //     console.log(err);
    //   });

    fetch('https://4717v036u3.zicp.fun/techshare/designmode/add', {
      method: 'post',
      body: formData,
      // headers: {
      //   'Content-Type': 'multipart/form-data',
      // },
    })
      .then((res) => res.text())
      .then((res) => {
        onClose();
        message.success({ content: '上传成功！', duration: 1 });
      });
    //老师的任务上传
    // onClose();
    // message.success({ content: '上传成功！', duration: 1 });
  };
  return (
    <div>
      <Drawer
        title={task?.name}
        placement="right"
        size="large"
        closable={false}
        onClose={onClose}
        open={task !== undefined}
      >
        <ConfigProvider componentSize="large">
          <Form onFinish={handleSubmit} {...formItemLayout} form={form}>
            {/* 负责人 */}
            <Row gutter={16} justify="center">
              <Col span={16}>
                <Form.Item name="principal" label="任务负责人">
                  <Input placeholder="任务负责人" />
                </Form.Item>
              </Col>
            </Row>
            {/* 任务描述 */}
            <Row gutter={16} justify="center">
              <Col span={16}>
                <Form.Item
                  name="description"
                  label="任务描述"
                  rules={[
                    {
                      required: false,
                      message: '添加任务描述',
                    },
                  ]}
                >
                  <Input.TextArea rows={4} placeholder="添加任务描述" />
                </Form.Item>
              </Col>
            </Row>
            {/* 文件上传 */}
            <Row gutter={16} justify="center">
              <Col span={16}>
                <Form.Item label="文件上传" valuePropName="fileList">
                  {/* <Upload.Dragger name="files">
                    <p className="ant-upload-drag-icon">
                      <FilePptOutlined />
                    </p>
                    <p className="ant-upload-text">
                      点击/拖拽/文档文件到此处上传
                    </p>
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
                    <p className="ant-upload-text">
                      点击/拖拽/文档文件到此处上传
                    </p>
                  </Upload.Dragger>
                </Form.Item>
              </Col>
            </Row>
            {/* 疑问 */}
            <Row gutter={16} justify="center">
              <Col span={16}>
                <Form.Item
                  name="question"
                  label="任务疑问"
                  rules={[
                    {
                      required: false,
                    },
                  ]}
                >
                  <Input.TextArea
                    rows={4}
                    placeholder="有什么想问老师的。。。"
                  />
                </Form.Item>
              </Col>
            </Row>
            {/* 提交内容 */}
            <Row gutter={16} justify="center">
              <Col span={4}>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className={'form-button'}
                  >
                    提交
                  </Button>
                </Form.Item>
              </Col>
              <Col>
                <Form.Item>
                  <Button
                    onClick={onReset}
                    htmlType="button"
                    className={'form-button'}
                  >
                    取消
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </ConfigProvider>
      </Drawer>
    </div>
  );
}

export default TaskDetail;
