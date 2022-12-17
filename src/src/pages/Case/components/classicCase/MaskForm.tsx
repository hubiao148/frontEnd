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
} from 'antd';
import styled from './index.less';
import {
  FilePptOutlined,
  InboxOutlined,
  PlusOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import { useUsualFileUpload } from '@/utils/useUsualFileUpload';
import { useBigFileUpload } from '@/utils/useBigFileUpload';
import { useEffect, useState } from 'react';
import { uploadTeach } from '@/api/techShare';
interface maskProps {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: maskProps['isModalOpen']) => void;
}

let DatePicker: any = TDatePicker;

const normFile = (e: any) => {
  console.log('Upload event:', e);
  // const formData = new FormData();
  // setFormData(e.fileList);
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};
export default function MaskForm({ isModalOpen, setIsModalOpen }: maskProps) {
  const [form] = Form.useForm();
  const onReset = () => {
    form.resetFields();
  };
  // const [formData, setFormData] = useState([{ files: '' }]);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  // const [file, setFile] = useState<any>();
  // const [video, setVideo] = useState<any>();
  //   const props = {
  //     onRemove:(file) => {
  //       const index = fileList.indexOf(file);
  //       const newFileList = fileList.slice();
  //       newFileList.splice(index, 1);
  //       setFileList(newFileList);
  //     }
  // ,
  //     beforeUpload: (file) => {
  //       setFileList([...fileList, file]);

  //       return false;
  //     },
  //     fileList,
  //   };
  // 文件上传函数
  /**
   *
   * @param e File类型的数据
   * @returns Promise<any>
   */
  function fileUpload(e: File) {
    // let res = await useUsualFileUpload(e, '/umi/fileUpload');
    // console.log(res);
    // if (res.status == 200) {
    //   message.success(`${e.name}上传成功！`);
    //   return true;
    // } else {
    //   message.error(`${e.name}上传失败！`);
    //   return Upload.LIST_IGNORE;
    // }
    // setFile(File)
    console.log(e);
    return true;
  }

  function videoUpload(e: File) {
    console.log(e);
    // setVideo(e);
    return true;
  }
  // useEffect(() => {
  // //获取表单中的文件
  // const normFile = (e: any) => {
  //   console.log('Upload event:', e);
  //   // const formData = new FormData();
  //   // setFormData(e.fileList);
  //   if (Array.isArray(e)) {
  //     return e;
  //   }
  //   return e && e.fileList;
  // };
  // }, []);

  function upload(values: any) {
    // console.log(form.getFieldValue())
    let formData = new FormData();
    // formdatas.append('file', e);
    // console.log(e);
    // formdatas.append('video', video);
    console.log('fileList', fileList);
    fileList.forEach((file) => {
      // formData.append(
      //   'files[]',
      //   new Blob([JSON.stringify(fileList)], { type: 'application/json' }),
      // );
      formData.append('files[]', file as RcFile);
    });
    console.log('formData', formData.getAll('files[]'));
    let sceneDesign = {
      groupId: values.groupId,
      year: values.year,
      techType: values.techType,
      techShare: values.techShare,
      dateTime: values.dateTime,
    };
    formData.append('sceneDesign{}', JSON.stringify(sceneDesign));
    // console.log('fileList', fileList);
    uploadTeach(formData)
      .then((res) => {
        console.log(res);
        return true;
      })
      .catch((err: Error) => {
        console.log(err);
      });
    // uploadTeach({
    //   files: formData,
    //   sceneDesign: {
    //     groupId: values.groupId,
    //     year: values.year,
    //     techType: values.techType,
    //     techShare: values.techShare,
    //     dateTime: values.dateTime,
    //   },
    // })
    //   .then((res) => {
    //     console.log(res);
    //     return true;
    //   })
    //   .catch((err: Error) => {
    //     console.log(err);
    //   });
  }

  return (
    <ConfigProvider componentSize="large">
      <Form layout="vertical" form={form} onFinish={upload}>
        {/* 组号年级班级 */}
        <Row gutter={16} justify="center">
          <Col span={8}>
            <Form.Item
              initialValue="2"
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
              initialValue="前端"
              name="techType"
              label="技术类别"
              rules={[{ required: true, message: '请输入类别' }]}
            >
              <Select placeholder="请选择技术方向">
                <Select.Option value="前端">前端</Select.Option>
                <Select.Option value="后端">后端</Select.Option>
                <Select.Option value="游戏开发">游戏开发</Select.Option>
                <Select.Option value="其它">其它</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              initialValue="ss"
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
            <Form.Item
              label="文件上传"
              valuePropName="fileList"
              getValueFromEvent={normFile}
            >
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
              {/* <Upload.Dragger name="files" beforeUpload={(e) => videoUpload(e)}>
                <p className="ant-upload-drag-icon">
                  <VideoCameraOutlined />
                </p>
                <p className="ant-upload-text">点击/拖拽/ 视频到此处上传</p>
              </Upload.Dragger> */}
              {/* <Upload.Dragger name="files" beforeUpload={() => false}>
                <p className="ant-upload-drag-icon">
                  <VideoCameraOutlined />
                </p>
                <p className="ant-upload-text">点击/拖拽/ 视频到此处上传</p>
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
              rules={[{ required: true, message: '请选择分享的日期' }]}
            >
              <DatePicker />
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
