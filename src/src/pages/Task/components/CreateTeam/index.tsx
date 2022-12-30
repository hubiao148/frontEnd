/*
 * @Author: hcy
 * @Date: 2022-11-09 17:25:40
 * @LastEditors: zyqqun 2450100414@qq.com
 * @LastEditTime: 2022-12-30 21:29:04
 * @FilePath: \src\src\pages\Task\components\CreateTeam\index.tsx
 * @Description: 创建团队
 *
 */
import { createTeam } from '@/api/task';
import storage from '@/utils/storage';
import {
  Button,
  Form,
  Input,
  Breadcrumb,
  DatePicker as TDatePicker,
  Col,
  Row,
  message,
} from 'antd';
import { Link } from 'umi';
import styled from './index.less';

export default function index() {
  const [form] = Form.useForm();
  //清空表单
  const onReset = () => {
    form.resetFields();
  };
  const { classId, id } = storage.getItem('userMsg');
  const onFinish = (values: any) => {
    //创建团队的接口
    createTeam({
      classId: classId,
      gitUrl: values.linkAddress,
      groupName: values.teamNumber,
      introduction: values.projectContent,
      leaderId: id,
      projectName: values.projectName,
    }).then((res) => {
      // @ts-ignore
      // console.log(res.meta.msg);
      if (res.meta.code == 500) {
        message.error({ content: '你已经创建了团队！', duration: 1 });
      } else {
        message.success({ content: '创建成功！', duration: 1 });
      }
    });
  };
  return (
    <div className={styled.createTeamWrapper}>
      <div className={styled['menu']}>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Link to="/task">实践任务</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/task/staging">工作台</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>创建团队</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className={styled.teamForm}>
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Row gutter={24} justify="center">
            <Col span={9}>
              <Form.Item label="团队组号" name="teamNumber">
                <Input placeholder="填写团队组号(eg：1组)" />
              </Form.Item>
            </Col>
            <Col span={9}>
              <Form.Item name="linkAddress" label="代码仓库地址">
                <Input placeholder="gitee仓库链接" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24} justify="center">
            <Col span={18}>
              <Form.Item label="项目名称" name="projectName">
                <Input placeholder="请输入项目名称" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24} justify="center">
            <Col span={18}>
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
          </Row>
        </Form>
      </div>
    </div>
  );
}
