/*
 * @Author: hcy
 * @Date: 2022-11-09 16:29:55
 * @LastEditors: hcy
 * @LastEditTime: 2022-11-20 20:37:58
 * @FilePath: \src\src\pages\Task\components\CreateTask\index.tsx
 * @Description: 创建任务
 *
 */
import storage from '@/utils/storage';
import {
  Button,
  Form,
  Input,
  Breadcrumb,
  DatePicker as TDatePicker,
  Col,
  Row,
  Select
} from 'antd';
import { useEffect, useState } from 'react';
import { Link } from 'umi';
import styled from './index.less';

let DatePicker: any = TDatePicker;
export default function index() {
  const [userState, setUserState] = useState('学生');
  useEffect(() => {
    setUserState(storage.getItem('userMsg').userType);
  }, []);
  const [form] = Form.useForm();
  //清空表单
  const onReset = () => {
    form.resetFields();
  };
  const [defaultYear] = useState((new Date()).getFullYear() - 2)
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
          {userState == '老师' ? (
            <Row gutter={24}>
              <Col span={8}>
                <Form.Item name="assignGrade" label="指派年级">
                  <Select
                    defaultValue={defaultYear + '级'}
                    showSearch
                    style={{ width: 200 }}
                    placeholder="选择年级"
                    optionFilterProp="children"
                    filterOption={(input, option) => (option?.label ?? '').includes(input)}
                    filterSort={(optionA, optionB) =>
                      (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
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
                <Form.Item name="assignClass" label="指派班级">
                  <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="选择班级"
                    optionFilterProp="children"
                    filterOption={(input, option) => (option?.label ?? '').includes(input)}
                    filterSort={(optionA, optionB) =>
                      (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
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
                    ]}
                  />
                </Form.Item>
              </Col >
              <Col span={8}>
                <Form.Item name="assignGroup" label="指派小组">
                  <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="选择小组"
                    optionFilterProp="children"
                    filterOption={(input, option) => (option?.label ?? '').includes(input)}
                    filterSort={(optionA, optionB) =>
                      (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                    }
                    options={[
                      {
                        value: '1',
                        label: '1组',
                      },
                      {
                        value: '2',
                        label: '2组',
                      },
                    ]}
                  />
                </Form.Item>
              </Col>
              <div style={{ margin: '20px' }}></div>
            </Row >

          ) : null
          }
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
            <Col span={3}>
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
        </Form >
      </div >
    </div >
  );
}
