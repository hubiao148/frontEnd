/*
 * @Author: hcy
 * @Date: 2022-11-20 21:37:01
 * @LastEditors: hcy
 * @LastEditTime: 2022-11-23 20:35:33
 * @FilePath: \src\src\pages\Task\components\LookTask\index.tsx
 * @Description: 查看
 * 
 */
import React, { useState } from 'react'
import FileViewer from "@/components/FileViewer"

import style from './index.less'
import { Breadcrumb, Modal } from 'antd'
import { Link } from 'umi'
export default function index() {
    const [isModalOpen, setIsModalOpen] = useState(false);
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
                <button onClick={() => {
                    setIsModalOpen(true);
                }}> 预览</button>
            </div>
            <Modal
                closable={false}
                footer={null}
                width="100vw"
                style={{
                    maxWidth: '100vw',
                    top: 0,
                    paddingBottom: 0,
                }}
                bodyStyle={{ height: '100vh' }}
                open={isModalOpen}
                onCancel={() => { setIsModalOpen(false) }}
            >
                <FileViewer file={'https://qn.liuyinjihua.com/%E7%BD%91%E7%BB%9C%E5%8D%8A%E6%9C%9F%E5%AE%9E%E9%AA%8C%E8%AE%BE%E8%AE%A1%E6%96%B9%E6%A1%88.docx?e=1669207211&token=bs0nrwJpD1z6JJLOEOpgc9BxuHemz3IEyVIrF3dQ:0dt2wfPsN7mjBmIWRP8X89qrE1w='}></FileViewer>

            </Modal>
        </div >
    )
}
