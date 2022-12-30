/*
 * @Author: hcy
 * @Date: 2022-11-26 14:26:01
 * @LastEditors: hcy
 * @LastEditTime: 2022-12-30 21:33:57
 * @FilePath: \src\src\pages\Task\components\Staging\components\StagingTeacher\GroupList\index.tsx
 * @Description: 小组详情
 * 
 */
import React, { useEffect, useState } from 'react'
import { Breadcrumb, Space, Table, Tag, message } from 'antd'

const { Column, ColumnGroup } = Table;
import { Link, useParams } from 'umi'
import style from './index.less'
interface DataType {
    key: React.Key;
    Name: string;
    grade: string;
    class: string;
    tags: string;
}

const dataC: DataType[] | any = [
    {
        key: '',
        Name: '',
        grade: '',
        class: '',
        tags: '',
    },
];
import { deleteMemberById, queryGroupDetailById } from '@/api/task/teacher';

export default function index() {
    const [isLoading,setIsloading] =useState(false)
    const [data, setData] = useState(dataC);
    const params: { id: any } = useParams();
    useEffect(() => {
        setIsloading(true)
        queryGroupDetailById(params.id).then((res) => {
            console.log(res.data)
            
            let resData =  res.data.users.map((i:any) => {
                return {
                    key: i.id,
                    Name: i.username,
                    grade: res.data.grade,
                    class: res.data.BanJi,
                    tags: res.data.leader===i.id?'组长':'组员',
                }
            })
            console.log(resData)
            setData(resData)
            setIsloading(false)
        })
    }, [])
    function deleteMember(res:any) {
        console.log(res.key)
        if (res.tags === '组长') {
            message.error({ content: '组长删不掉哦！', duration: 1 });
            return;
        }
        deleteMemberById(res.key).then((result) => {
            console.log(result)
            message.success({ content: '删除成员成功！', duration: 1 });
            queryGroupDetailById(params.id).then((res) => {
                console.log(res.data)
                let resData = res.data.users.map((i: any) => {
                    return {
                        key: i.id,
                        Name: i.username,
                        grade: res.data.grade,
                        class: res.data.BanJi,
                        tags: res.data.leader === i.id ? '组长' : '组员',
                    }
                })
                console.log(resData)
                setData(resData)
            })
        })
    }
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
                <Table dataSource={data} loading={isLoading}>
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
                                <a onClick={()=>deleteMember(record)}>删除</a>
                            </Space>
                        )}
                    />
                </Table>
            </div>
        </div>
    )
}
