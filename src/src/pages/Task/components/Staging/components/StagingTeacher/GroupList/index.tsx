/*
 * @Author: hcy
 * @Date: 2022-11-26 14:26:01
 * @LastEditors: hcy
 * @LastEditTime: 2022-11-26 15:09:09
 * @FilePath: \src\src\pages\Task\components\Staging\components\StagingTeacher\GroupList\index.tsx
 * @Description: 小组详情
 * 
 */
import React, { useEffect } from 'react'
import { Breadcrumb, Space, Table, Tag } from 'antd'

const { Column, ColumnGroup } = Table;
import { Link } from 'umi'
import style from './index.less'
interface DataType {
    key: React.Key;
    Name: string;
    grade: string;
    class: string;
    tags: string;
}

const data: DataType[] = [
    {
        key: '1',
        Name: 'Brown',
        grade: '2020',
        class: '3',
        tags: '组长',
    },
    {
        key: '2',
        Name: 'Jim',
        grade: '2020',
        class: '3',
        tags: '组员',
    },
    {
        key: '3',
        Name: 'Black',
        grade: '2020',
        class: '3',
        tags: '组员',
    },
];
import { queryGroupByClassId } from '@/api/task/teacher';
export default function index() {
    useEffect(() => {
        queryGroupByClassId(3).then((res) => {
            console.log(res)
        })
    },[])
    return (
        <div className={style.container}>
            <div className={style['menu']}>
                <Breadcrumb separator=">">
                    <Breadcrumb.Item>
                        <Link to="/task">实践任务</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to="/task/staging">工作台</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>小组成员编辑</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className={style.body}>
                <Table dataSource={data}>
                    <Column title="名字" dataIndex="Name" key="Name" />
                    <Column title="年级" dataIndex="grade" key="age" />
                    <Column title="班级" dataIndex="class" key="address" />
                    <Column
                        title="职位"
                        dataIndex="tags"
                        key="tags"
                        render={(tags: string) => (
                            <>
                                <Tag color="blue" key={tags}>
                                    {tags}
                                </Tag>
                            </>
                        )}
                    />
                    <Column
                        title="操作"
                        key="action"
                        render={(_: any, record: DataType) => (
                            <Space size="middle">
                                <a>{
                                    record.tags == '组长'?'设为组员':'设为组长'
                                }</a>
                                <a>删除</a>
                            </Space>
                        )}
                    />
                </Table>
            </div>
        </div>
    )
}
