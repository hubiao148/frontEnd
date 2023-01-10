/*
 * @Author: hcy
 * @Date: 2022-11-09 16:27:10
 * @LastEditors: hcy
 * @LastEditTime: 2022-12-31 01:30:55
 * @FilePath: \src\src\pages\Task\components\Staging\components\StagingTeacher\index.tsx
 * @Description: 老师工作台
 * 
 */
import React, { useEffect, useState } from 'react'
import { Divider, List, Select, Button, Pagination, Skeleton, Progress, Statistic, message,Popconfirm } from 'antd';
import style from './index.less'
import { Link, useHistory } from 'umi';
import { useThrottle } from '@/utils/useThrottle';
import { number } from 'echarts/core';
import { deleteGroupById, queryAllGroup, queryGroupByClassId, queryGroupByGradeId, queryGroupByGradeIds, queryGroupList } from '@/api/task/teacher';
/**
     * 
     * grade:年级
     * class:班级
     * gp:小组
     * gpn:项目名
     * cp:项目完成情况
     * noup:作业未上传次数
     * lup:上次是否上传
     * 
     */

const da = [
    { grade: '2020', class: '3', gp: '1', gpN: '软件工程实践教学辅助平台', cp: 80, noUp: '10', lUp: true, id: 1 }, { grade: '2020', class: '3', gp: '1', gpN: '软件工程实践教学辅助平台', cp: 80, noUp: '10', lUp: true, id: 1 }, { grade: '2020', class: '3', gp: '1', gpN: '软件工程实践教学辅助平台', cp: 80, noUp: '10', lUp: true, id: 1 }, { grade: '2020', class: '3', gp: '1', gpN: '软件工程实践教学辅助平台', cp: 80, noUp: '10', lUp: true, id: 1 }, { grade: '2020', class: '3', gp: '1', gpN: '软件工程实践教学辅助平台', cp: 80, noUp: '10', lUp: true, id: 1 }, { grade: '2020', class: '3', gp: '1', gpN: '软件工程实践教学辅助平台', cp: 80, noUp: '10', lUp: true, id: 1 },
];
export default function index() {
    const [grade, setGrade] = useState(2020);
    const [c, setClass] = useState(0);
    // 加载状态
    const [loading, setLoading] = useState(false);
    // 使用导航栏
    const history = useHistory();
    // 初始化数据
    const [data, setData] = useState(da);
    useEffect(() => {
        setLoading(true);
        queryAllGroup().then((result) => {
            // console.log(result.data)
            let resData = result.data.groups.map((i:any) => {
                // console.log(i)
                return {
                    grade: i.group.gradeId,
                    class: i.group.classId,
                    gp: i.group.groupName,
                    gpN: i.group.projectName,
                    cp: i.group.progress,
                    noUp: i.num,
                    lUp: i.upload==='0'?false:true,
                    id: i.group.id
                }
            })
            // console.log(resData)
            setData(resData)
            setLoading(false);
        })
    }, [])
    // 搜索
    function searchMsg() {
        // console.log(111)
        setLoading(true);
        if (c != 0) {
            queryGroupByClassId(c).then((res:any) => {
                if (res.data == null) {
                    message.error({ content: '查询失败！', duration: 1 });
                    setLoading(false);
                    return;
                }
                message.success({ content: '查询成功！', duration: 1 });
                let resData = res.data.groups.map((i: any) => {
                    // console.log(i)
                    return {
                        grade: i.group.gradeId,
                        class: i.group.classId,
                        gp: i.group.groupName,
                        gpN: i.group.projectName,
                        cp: i.group.progress,
                        noUp: i.num,
                        lUp: i.upload === '0' ? false : true,
                        id: i.group.id
                    }
                })
                // console.log(resData)
                setData(resData)
                setLoading(false);
            }).catch((err) => {
                console.log(err)
            });
        } else {
            queryGroupByGradeIds(grade).then((res) => {
                if (res.data == null) {
                    message.error({ content: '查询失败！', duration: 1 });
                    setLoading(false);
                    return;
                }
                message.success({ content: '查询成功！', duration: 1 });
                let resData = res.data.groups.map((i: any) => {
                    // console.log(i)
                    return {
                        grade: i.gradeId,
                        class: i.classId,
                        gp: i.groupName,
                        gpN: i.projectName,
                        cp: i.progress,
                        noUp: i.num,
                        lUp: i.upload === '0' ? false : true,
                        id: i.id
                    }
                })
                // console.log(resData)
                setData(resData)
                setLoading(false);
            })
        }
        
    }
    /**
     * 删除小组
     * @param id 
     */
    function deleteById(id: number) {
        console.log(id)
        deleteGroupById(id).then((res) => {
            console.log(res)
        })
        setLoading(true);
        message.success({ content: '删除小组成功！', duration: 1 });
        queryGroupList().then((result) => {
            console.log(result.data)
            let resData = result.data.groups.map((i: any) => {
                console.log(i)
                return {
                    grade: i.group.gradeId,
                    class: i.group.classId,
                    gp: i.group.groupName,
                    gpN: i.group.projectName,
                    cp: i.group.progress,
                    noUp: i.num,
                    lUp: i.upload === '0' ? false : true,
                    id: i.group.id
                }
            })
            console.log(resData)
            setData(resData)
            setLoading(false);
        })
    }
    const handleChange = (value:any) => {
        console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
        setGrade(value)
        setClass(0);
    };
    const handleChangeClass = (v:any) => {
        setClass(v)
    }

    const cancel = () => {
        message.error('删除失败！');
    };
    const onSearchMsg = useThrottle(searchMsg, 700);
    // 设置默认年份
    const [defaultYear] = useState((new Date()).getFullYear() - 3)
    return (
        <div className={style.container}>
            <List
                size="large"
                header={<div className={style.header}>
                    <Select
                        defaultValue={defaultYear + '级'}
                        showSearch
                        onChange={handleChange}
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
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="选择班级"
                        onChange={handleChangeClass}
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
                    &nbsp;&nbsp;&nbsp;<Button onClick={searchMsg}>搜索</Button>
                    <div className={`${style.msg} ${style.headermsg}`} >
                        <div>年级</div>
                        <div>班级</div>
                        <div>小组</div>
                        <div style={{
                            fontSize: '1.6rem',
                        }}>项目名</div>
                        <div>项目进度</div>
                        <div>作业未完成次数</div>
                        <div>上次是否上传</div>
                        <div >
                            管理小组
                        </div>
                    </div>
                </div >
                }
                footer={< div className={style.footer} > <Pagination pageSize={6} total={30} responsive={true} /></div >}
                bordered
                dataSource={data}
                renderItem={
                    item =>
                        < List.Item className={style.body_item}
                        > {!loading ?
                            (<div className={style.msg}>
                                <div>{item.grade}级</div>
                                <div>{item.class}班</div>
                                <div>{item.gp}</div>
                                <div>{item.gpN}</div>
                                <div><Progress percent={item.cp} status="active" /></div>
                                <div> <Statistic title="未完成上传次数" value={item.noUp}></Statistic>  </div>
                                <div> <Statistic title="上次文件上传与否" value={item.lUp ? '是' : '否'}></Statistic>  </div>
                                <div style={{ fontSize: '14px' }}>
                                    <Link to={`/task/taskmanage/${item.id}`}>查看</Link>
                                    <Divider type="vertical" />
                                        <Link to={`/task/groupDetail/${item.id}`}>编辑小组</Link>
                                    <Divider type="vertical" />
                                        
                                        <Popconfirm
                                            title="是否删除该小组？"
                                            onConfirm={() => deleteById(item.id)}
                                            onCancel={cancel}
                                            okText="是"
                                            cancelText="否"
                                        >
                                            <a href="">删除</a>
                                        </Popconfirm>
                                </div>
                            </div>)
                            : (<Skeleton loading={loading} active paragraph={{ rows: 1, width: '100%' }} title={false}>
                                {item}
                            </Skeleton>)
                            }</List.Item >
                }
            />
        </div >
    )
}
