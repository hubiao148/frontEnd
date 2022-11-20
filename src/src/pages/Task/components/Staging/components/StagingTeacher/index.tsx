/*
 * @Author: hcy
 * @Date: 2022-11-09 16:27:10
 * @LastEditors: hcy
 * @LastEditTime: 2022-11-20 13:48:28
 * @FilePath: \src\src\pages\Task\components\Staging\components\StagingTeacher\index.tsx
 * @Description: 老师工作台
 * 
 */
import React, { useEffect, useState } from 'react'
import { Divider, List, Select, Button, Pagination, Skeleton, Progress, Statistic } from 'antd';
import style from './index.less'
import { useHistory } from 'umi';
import { useThrottle } from '@/utils/useThrottle';
import { number } from 'echarts/core';
export default function index() {
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, [])
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

    const data = [
        { grade: '2020', class: '3', gp: '1', gpN: '软件工程实践教学辅助平台', cp: 80, noUp: '10', lUp: true },
        { grade: '2020', class: '4', gp: '2', gpN: '软件工程实践教学辅助平台', cp: 80, noUp: '10', lUp: true },
        { grade: '2020', class: '4', gp: '3', gpN: '软件工程实践教学辅助平台', cp: 80, noUp: '10', lUp: true },
        { grade: '2020', class: '4', gp: '4', gpN: '软件工程实践教学辅助平台', cp: 80, noUp: '10', lUp: true },
        { grade: '2020', class: '3', gp: '5', gpN: '软件工程实践教学辅助平台', cp: 80, noUp: '10', lUp: true },
        { grade: '2020', class: '4', gp: '6', gpN: '软件工程实践教学辅助平台', cp: 80, noUp: '10', lUp: true },
        { grade: '2020', class: '3', gp: '7', gpN: '软件工程实践教学辅助平台', cp: 80, noUp: '10', lUp: true },
    ];
    function gotoManage() {
        history.push('/task/manage')
    }
    function searchMsg() {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }
    const onSearchMsg = useThrottle(searchMsg, 700);
    const [defaultYear] = useState((new Date()).getFullYear() - 2)
    return (
        <div className={style.container}>
            <List
                size="large"
                header={<div className={style.header}>
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
                            fontSize: '18px',
                        }}>项目名</div>
                    <div>项目进度</div>
                    <div>作业未完成次数</div>
                    <div>上次是否上传</div>
                </div>
                </div >
                }
footer = {< div className = { style.footer } > <Pagination pageSize={7} total={30} responsive={true} /></div >}
bordered
dataSource = { data }
renderItem = {
    item =>
                        < List.Item onClick = { gotoManage } className = { style.body_item } > {!loading ?
    (<div className={style.msg}>
        <div>{item.grade}级</div>
        <div>{item.class}班</div>
        <div>{item.gp}组</div>
        <div>{item.gpN}</div>
        <div><Progress percent={item.cp} status="active" /></div>
        <div> <Statistic title="未完成上传次数" value={item.noUp}></Statistic>  </div>
        <div> <Statistic title="上次文件上传与否" value={item.lUp ? '是' : '否'}></Statistic>  </div>
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
