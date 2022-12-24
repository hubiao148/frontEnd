/*
 * @Author: hcy
 * @Date: 2022-11-09 17:25:40
 * @LastEditors: zyqqun 2450100414@qq.com
 * @LastEditTime: 2022-12-23 17:26:25
 * @FilePath: \src\src\pages\Task\components\CreateTeam\index.tsx
 * @Description: 创建团队
 *
 */
import { createTeam } from '@/api/task';
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
    createTeam({
      TeamName: values.TeamName,
      teamNumber: values.teamNumber,
      linkAddress: values.linkAddress,
    }).then((res) => {
      console.log(res);
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
            {/* <Col span={9}>
              <Form.Item label="团队名称" name="TeamName">
                <Input placeholder="请输入团队名称" />
              </Form.Item>
            </Col> */}
            <Col span={9}>
              <Form.Item label="团队组号" name="teamNumber">
                <Input placeholder="填写团队组号(eg：1组)" />
              </Form.Item>
            </Col>
            <Col span={9}>
              <Form.Item
                name="linkAddress"
                initialValue="https://gitee.com/han-changyuan/easySE_frontEnd"
                label="代码仓库地址"
              >
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
