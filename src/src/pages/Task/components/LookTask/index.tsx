/*
 * @Author: hcy
 * @Date: 2022-11-20 21:37:01
 * @LastEditors: hcy
 * @LastEditTime: 2022-12-24 17:40:51
 * @FilePath: \src\src\pages\Task\components\LookTask\index.tsx
 * @Description: 查看
 * 
 */
import React, { useEffect, useState } from 'react'
import FileViewer from "@/components/FileViewer"

import style from './index.less'
import { Breadcrumb, Modal, Badge, Descriptions, Input, Button, Switch, message } from 'antd'
const { TextArea } = Input;
import { Link, useParams } from 'umi'
import { checkStateChange, queryTaskDetailById } from '@/api/task/teacher';
export default function index() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [story, setStory] = useState('');
    const [time, setTime] = useState('');
    const [taskName, setTaskName] = useState('');
    const [url, setUrl] = useState('');
    const [check, setCheck] = useState('');
    const params:{id:any,sta:any} = useParams();
    useEffect(() => {
        console.log(111)
        console.log(params)
        queryTaskDetailById(params.id, params.sta).then((res) => {
            console.log(res.data)
            setStory(res.data.ttask.story);
            setTime(res.data.ttask.finisheddate.split('T')[0]);
            setTaskName(res.data.ttask.taskName);
            setUrl(res.data.url)
            setCheck(res.data.ttask.checked)
        })
        return () => {
            checkStateChange(params.id, check?1:0).then((res) => {
                console.log(res)
            })
        }
    }, [])
    function onChange(checked: boolean) {
        setCheck(checked ? '1' : '0')
        message.success({ content: '改变状态成功！', duration: 1 });
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
                    <Breadcrumb.Item>
                        <Link to="/task/staging">任务管理</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>任务查看</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className={style.body}>
                <h2 style={{ textAlign: 'center' }}>{taskName}</h2>
                <Descriptions title={'截止时间：' + time} bordered column={1} labelStyle={{ textAlign: 'center', width: '15%' }} extra={(

                    <div>
                        是否审查通过：
                        <Switch checked={check==='0'?false:true} onChange={onChange} />
                    </div>
                )}>
                    <Descriptions.Item label="描述" >{ story}</Descriptions.Item>
                    <Descriptions.Item label="图片" contentStyle={{ textAlign: 'center' }}>
                        <span style={{ cursor: 'pointer', color: '#4096ff' }} onClick={() => setIsModalOpen(true)}>点击预览</span>
                    </Descriptions.Item>
                    <Descriptions.Item label="附件" contentStyle={{ textAlign: 'center' }}><a href="https://qn.liuyinjihua.com/%E5%AE%9E%E6%96%BD%E5%91%A8%E6%8A%A5.xlsx?e=1669810096&token=bs0nrwJpD1z6JJLOEOpgc9BxuHemz3IEyVIrF3dQ:NftNE9YGY2I07Vkq5iwSO6DOT3c=">点击下载</a></Descriptions.Item>
                    <Descriptions.Item label="仓库" contentStyle={{ textAlign: 'center' }}>  <a href={url} target={'_blank'}>点击跳转</a> </Descriptions.Item>
                    <Descriptions.Item label="提问" >需求文档写不来啊！</Descriptions.Item>
                    <Descriptions.Item label="评论&回复"><TextArea rows={4} placeholder="maxLength is 6" maxLength={6} /></Descriptions.Item>
                </Descriptions>
                <div className={style.footer}>
                    <div>
                        <Button danger type="primary">取消</Button>
                        <Button type="primary">确定</Button>
                    </div>
                </div>
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
