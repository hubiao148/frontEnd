/*
 * @Author: hcy
 * @Date: 2022-11-09 16:27:10
 * @LastEditors: hcy
 * @LastEditTime: 2022-11-14 22:39:13
 * @FilePath: \src\src\pages\Task\components\Staging\components\StagingTeacher\index.tsx
 * @Description: 老师工作台
 * 
 */
import React from 'react'
import { Divider, List, Select } from 'antd';
import style from './index.less'
import { useHistory } from 'umi';
export default function index() {
    const history = useHistory();
    const data = [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
    ];
    function gotoManage() {
        history.push('/task/manage')
    }
    return (
        <div className={style.container}>
            <List
                size="large"
                header={<div className={style.header}>
                    <Select
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
                                label: 'sds',
                            },
                            {
                                value: '2',
                                label: 'Closed',
                            },
                            {
                                value: '3',
                                label: 'Communicated',
                            },
                            {
                                value: '4',
                                label: 'Identified',
                            },
                            {
                                value: '5',
                                label: 'Resolved',
                            },
                            {
                                value: '6',
                                label: 'Cancelled',
                            },
                        ]}
                    />
                </div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={data}
                renderItem={item => <List.Item onClick={gotoManage} className={style.body_item}>{item}</List.Item>}
            />
        </div>
    )
}
