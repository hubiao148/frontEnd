/*
 * @Author: hcy
 * @Date: 2022-11-09 16:29:55
 * @LastEditors: zyqqun 2450100414@qq.com
 * @LastEditTime: 2022-11-16 19:12:22
 * @FilePath: \src\src\pages\Task\components\CreateTask\index.tsx
 * @Description: 创建任务
 *
 */
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
  return (
    <div className={styled.createTaskWrapper}>
      <div className={styled['menu']}>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Link to="/task">实践任务</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/task/staging">工作台</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>创建任务</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className={styled.taskForm}>
        <Form form={form} layout="horizontal">
          <Row gutter={24}>
            <Col span={8}>
              <Form.Item label="任务名称" name="taskName">
                <Input placeholder="请输入任务名称" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={20}>
              <Form.Item label="任务描述" name="taskDescription">
                <Input.TextArea
                  maxLength={200}
                  rows={4}
                  placeholder="填写任务的主要内容"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={20}>
              <Form.Item label="提交说明" name="taskExplain">
                <Input.TextArea
                  maxLength={200}
                  rows={4}
                  placeholder="填写任务的相关说明"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={20}>
              <Form.Item name="dateTime" label="结束时间">
                <DatePicker placement="topLeft" />
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
