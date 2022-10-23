/*
 * @Author: hcy
 * @Date: 2022-10-21 17:23:47
 * @LastEditors: hcy
 * @LastEditTime: 2022-10-23 13:06:26
 * @FilePath: \src\src\pages\myShare\components\QuestionDetails\index.tsx
 * @Description: 
 * 
 */
import React from 'react'
import { useHistory } from 'umi';
import style from './index.less'
import { Breadcrumb } from 'antd'
import { LikeOutlined, DislikeOutlined, BranchesOutlined, BookOutlined } from '@ant-design/icons'
export default function index() {
    const states = [
        { id: 1, s: false },
        { id: 2, s: false },
        { id: 3, s: false },
    ]
    const history = useHistory();
    function goBack() {
        history.push('/myshare');
    }
    function handleColorClick(id: number, e: any) {
        if (!states[id].s) {
            e.currentTarget.style.color = '#1c63d6';
            states[id].s = !states[id].s;
        } else {
            e.currentTarget.style.color = '#000000';
            states[id].s = !states[id].s;
        }

    }
    return (
        <div className={style.container}>
            <div className={style.top}>
                <Breadcrumb separator=">" style={{ cursor: 'pointer' }}>
                    <Breadcrumb.Item onClick={goBack}>技术问答</Breadcrumb.Item>
                    <Breadcrumb.Item>提问</Breadcrumb.Item>
                </Breadcrumb></div>
            <div className={style.body}>
                <div>
                    <div>
                        <div>
                            <div><LikeOutlined onClick={(e) => { handleColorClick(1, e) }} /></div>
                            <div><DislikeOutlined onClick={(e) => { handleColorClick(1, e) }} /></div>
                            <div><BookOutlined onClick={(e) => { handleColorClick(2, e) }} /></div>
                            <div><BranchesOutlined onClick={(e) => { handleColorClick(3, e) }} /></div>
                        </div>
                        <div>
                            23
                        </div>
                    </div>
                    <div>2</div>
                    <div>3</div>
                </div>
                <div>2</div>
            </div>
        </div>
    )
}
