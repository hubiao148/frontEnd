/*
 * @Author: hcy
 * @Date: 2022-11-07 19:53:51
 * @LastEditors: hcy
 * @LastEditTime: 2022-11-14 22:16:32
 * @FilePath: \src\src\pages\Task\components\Staging\index.tsx
 * @Description: 工作台
 * 
 */
import React, { useEffect, useState } from 'react'
import { Breadcrumb } from 'antd'
import StagingStudent from './components/StagingStudent'
import style from './index.less'
import { useHistory } from 'umi';
import storage from '@/utils/storage';
import StagingTeacher from './components/StagingTeacher';
export default function index() {
    const [userState, setUserState] = useState('学生');
    useEffect(() => {
        setUserState(storage.getItem('userMsg').userType);
    }, [])
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
            <div className={style.body}>
                {
                    userState == '学生' ? <StagingStudent /> : <StagingTeacher />
                }
            </div>
        </div>
    )
}
