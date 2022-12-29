/*
 * @Author: hcy
 * @Date: 2022-11-09 17:24:52
 * @LastEditors: zyqqun 2450100414@qq.com
 * @LastEditTime: 2022-12-23 17:04:12
 * @FilePath: \src\src\pages\Task\components\CreateProject\index.tsx
 * @Description: 创建项目
 *
 */
import { createProject } from '@/api/task';
import {
  Button,
  Form,
  Input,
  Breadcrumb,
  DatePicker as TDatePicker,
  Col,
  Row,
} from 'antd';
import { Link } from 'umi';
import styled from './index.less';

let DatePicker: any = TDatePicker;
export default function index() {
  const [form] = Form.useForm();
  //清空表单
  const onReset = () => {
    form.resetFields();
  };
  const onFinish = (values: any) => {
    //创建项目的接口
    createProject({
      projectName: values.projectName,
      projectContent: values.projectContent,
    }).then((res) => {
      console.log(res);
    });
  };
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
          <Breadcrumb.Item>创建项目</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className={styled.proForm}>
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Row gutter={24}>
            <Col span={8}>
              <Form.Item label="项目名称" name="projectName">
                <Input placeholder="请输入项目名称" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={20}>
              <Form.Item label="项目内容" name="projectContent">
                <Input.TextArea
                  maxLength={200}
                  rows={7}
                  placeholder="填写项目的主要内容或需求"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24} justify="center">
            <Col span={3}>
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
      </div>
    </div>
  );
}
