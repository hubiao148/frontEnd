/*
 * @Author: hcy
 * @Date: 2022-11-20 21:37:01
 * @LastEditors: hcy
 * @LastEditTime: 2022-12-30 21:10:26
 * @FilePath: \src\src\pages\Task\components\LookTask\index.tsx
 * @Description: 查看任务
 * 
 */
import React, { useEffect, useState } from 'react'
import FileViewer from "@/components/FileViewer"

import style from './index.less'
import { Breadcrumb, Modal, Badge, Descriptions, Input, Button, Switch, message } from 'antd'
const { TextArea } = Input;
import { Link, useHistory, useParams } from 'umi'
import { checkStateChange, queryTaskDetailById } from '@/api/task/teacher';
export default function index() {
    const history =useHistory()
    // 是否打开图层
    const [isModalOpen, setIsModalOpen] = useState(false);
    // 一些表单数据的初始化
    const [story, setStory] = useState('');
    const [file, setFile] = useState("");
    const [pic, setPic] = useState("");
    const [time, setTime] = useState('');
    const [taskName, setTaskName] = useState('');
    const [url, setUrl] = useState('');
    const [ask,setAsk] =useState<string|null>(null)
    const [check, setCheck] = useState('');
    const params: { id: any, sta: any } = useParams();
    // 钩子函数刷新状态
    useEffect(() => {
        console.log(111)
        console.log(params)
        queryTaskDetailById(params.id, params.sta).then((res) => {
            
            setPic(res.data.pic);
            setFile(res.data.file);
            // console.log(res.data.pic)
            // console.log(res.data)
            if (params.sta == 0) {
                setAsk(res.data.ttask.mailto);
                setStory(res.data.ttask.story);
                if (res.data.ttask.deadline != null) {
                    setTime(res.data.ttask.deadline.split('T')[0]); 
                } else {
                    setTime(res.data.ttask.finisheddate.split('T')[0]);
                }
                
                setTaskName(res.data.ttask.taskName);
                setUrl(res.data.url)
                setCheck(res.data.ttask.checked)
            } else {
                setAsk(res.data.task.question);
                setStory(res.data.task.info);
                setTime(res.data.task.finisheddate.split('T')[0]);
                setTaskName(res.data.task.taskName);
                setUrl(res.data.url)
                setCheck(res.data.task.checked)
            }
        })
        return () => {
            checkStateChange(params.id, check?1:0).then((res) => {
                console.log(res)
            })
        }
    }, [])
    /**
     * 改变检查状态
     * @param checked 
     */
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
                    <Descriptions.Item label="附件" contentStyle={{ textAlign: 'center' }}><a href={file} target={'_blank'}>点击下载</a></Descriptions.Item>
                    <Descriptions.Item label="仓库" contentStyle={{ textAlign: 'center' }}>  <a href={url} target={'_blank'}>点击跳转</a> </Descriptions.Item>
                    <Descriptions.Item label="提问" >{ask}</Descriptions.Item>
                    <Descriptions.Item label="评论&回复"><TextArea rows={4} placeholder="maxLength is 6" maxLength={6} /></Descriptions.Item>
                </Descriptions>
                <div className={style.footer}>
                    <div>
                        <Button danger type="primary">取消</Button>
                        <Button type="primary" onClick={() => {
                            message.success({ content: '回复成功！', duration: 1 });
                            history.go(-1);
                        }}>确定</Button>
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
                <FileViewer file={pic}></FileViewer>

            </Modal>
        </div >
    )
}
