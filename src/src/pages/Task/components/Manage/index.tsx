/*
 * @Author: hcy
 * @Date: 2022-11-07 20:24:21
 * @LastEditors: hcy
 * @LastEditTime: 2022-11-07 21:29:46
 * @FilePath: \src\src\pages\Task\components\Manage\index.tsx
 * @Description: 项目管理
 * 
 */
import React from 'react'
import style from './index.less'
import { Breadcrumb } from 'antd'
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
                body
            </div>
        </div>
    )
}
