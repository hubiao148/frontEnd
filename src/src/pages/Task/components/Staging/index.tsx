/*
 * @Author: hcy
 * @Date: 2022-11-07 19:53:51
 * @LastEditors: hcy
 * @LastEditTime: 2022-11-09 16:28:34
 * @FilePath: \src\src\pages\Task\components\Staging\index.tsx
 * @Description: 工作台
 * 
 */
import React from 'react'
import { Breadcrumb } from 'antd'
import StagingStudent from './components/StagingStudent'
import style from './index.less'
import { useHistory } from 'umi';
export default function index() {
    const history = useHistory();
    function goBack() {
        history.go(-1);
    }
    return (
        <div className={style.container}>
            <div className={style.top}>
                <Breadcrumb separator=">" style={{ cursor: 'pointer' }}>
                    <Breadcrumb.Item onClick={goBack}>技术问答</Breadcrumb.Item>
                    <Breadcrumb.Item>提问</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div>
                工作台
                <StagingStudent/>
            </div>
        </div>
    )
}
