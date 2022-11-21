/*
 * @Author: hcy
 * @Date: 2022-11-20 21:37:01
 * @LastEditors: hcy
 * @LastEditTime: 2022-11-21 13:54:43
 * @FilePath: \src\src\pages\Task\components\LookTask\index.tsx
 * @Description: 查看
 * 
 */
import React from 'react'
import style from './index.less'
import { Breadcrumb } from 'antd'
import { Link } from 'umi'
export default function index() {
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
                    <Breadcrumb.Item>
                        <Link to="/task/taskManage">任务管理</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>任务查看</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className={style.body}>

            </div>
        </div>
    )
}
