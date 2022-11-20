/*
 * @Author: hcy
 * @Date: 2022-11-09 17:25:40
 * @LastEditors: zyqqun 2450100414@qq.com
 * @LastEditTime: 2022-11-15 21:45:04
 * @FilePath: \src\src\pages\Task\components\CreateTeam\index.tsx
 * @Description: 创建团队
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
        <Form form={form} layout="vertical">
          <Row gutter={24} justify="center">
            <Col span={9}>
              <Form.Item label="团队名称" name="TeamName">
                <Input placeholder="请输入团队名称" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24} justify="center">
            <Col span={9}>
              <Form.Item label="团队组号" name="teamNumber">
                <Input placeholder="填写团队组号" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24} justify="center">
            <Col span={9}>
              <Form.Item name="linkAddress" label="代码仓库地址">
                <Input placeholder="gitee仓库链接" />
              </Form.Item>
            </Col>
          </Row>
          {/* <Row gutter={24} justify="center">
            <Col span={9}>
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
          </Row> */}

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
