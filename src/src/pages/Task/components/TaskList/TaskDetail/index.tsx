import {
  Input,
  Form,
  Row,
  Col,
  // DatePicker as TDatePicker,
  Button,
  Drawer,
  Upload,
  message,
  ConfigProvider,
} from 'antd';
import { FilePptOutlined } from '@ant-design/icons';
import type { RcFile } from 'antd/es/upload/interface';
import { taskT } from '../index';
import { uploadTask } from '@/api/task';
import { useEffect, useState } from 'react';
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 7 },
  },
};

interface IProps {
  task?: any; //被点击的那个任务
  groupId?: any;
  onClose: () => void;
  tasks: taskT[]; //所有任务
  setTasks: any;
}
// let DatePicker: any = TDatePicker;
function TaskDetail(props: IProps) {
  const { task, onClose, groupId, tasks, setTasks } = props;
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
      formData.append('file', file as RcFile);
    });
    console.log('formData', formData.getAll('file'));

    formData.append('id', task?.id); //任务id
    formData.append('groupId', groupId); //
    formData.append('assignedto', values.principal); //
    formData.append('story', values.description); //
    formData.append('mailto', values.question); //
    formData.append('taskName', task?.taskName); //
    formData.append('deadline', task?.deadline); //
    // console.log('fileList', fileList);
    uploadTask(formData).then((res) => {
      console.log(res);
      onClose();
      message.success({ content: '上传成功！', duration: 1 });
    });
    // uploadTask({
    //   id: task?.id,
    //   groupId: groupId,
    //   taskName: task?.taskName,
    //   deadline: task?.deadline,
    //   assignedto: values.principal,
    //   story: values.description,
    //   mailto: values.question,
    // }).then((res) => {
    //   console.log(res);
    //   onClose();
    //   message.success({ content: '上传成功！', duration: 1 });
    // });
  };
  return (
    <div>
      <Drawer
        title={task?.taskName}
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
