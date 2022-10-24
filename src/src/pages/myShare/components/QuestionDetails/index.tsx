/*
 * @Author: hcy
 * @Date: 2022-10-21 17:23:47
 * @LastEditors: hcy
 * @LastEditTime: 2022-10-24 18:17:46
 * @FilePath: \src\src\pages\myShare\components\QuestionDetails\index.tsx
 * @Description: 
 * 
 */
import React, { useRef } from 'react';
import { useHistory } from 'umi';
import style from './index.less';
import { Breadcrumb } from 'antd';
import Comments from './components/Comments';
import { LikeOutlined, DislikeOutlined, BranchesOutlined, BookOutlined } from '@ant-design/icons';
import ReplyDetail from './components/ReplyDetail';
export default function index() {
    const states = [
        { id: 0, s: false, disable: false },
        { id: 1, s: false, disable: false },
        { id: 2, s: false },
        { id: 3, s: false },
    ]
    const history = useHistory();
    function goBack() {
        history.push('/myshare');
    }
    function changeDisabled(id: number) {
        if (id == 0) {
            states[1].disable = !states[1].disable;
        } else if (id == 1) {
            states[0].disable = !states[0].disable;
        }
    }
    function handleColorClick(id: number, e: any) {
        if (!states[id].s) {
            if ((id == 0 || id == 1) && states[id].disable == true) {
                return;
            }
            e.currentTarget.style.color = '#1c63d6';
            states[id].s = !states[id].s;
            changeDisabled(id);

        } else {
            e.currentTarget.style.color = '#000000';
            states[id].s = !states[id].s;
            changeDisabled(id);
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
                            <div
                                onClick={(e) => { handleColorClick(0, e) }}
                            ><LikeOutlined /></div>
                            <div
                                onClick={(e) => { handleColorClick(1, e) }}
                            ><DislikeOutlined /></div>
                            <div
                                onClick={(e) => { handleColorClick(2, e) }}
                            ><BookOutlined /></div>
                            <div
                                onClick={(e) => { handleColorClick(3, e) }}
                            ><BranchesOutlined /></div>
                        </div>
                        <div>
                            <ReplyDetail></ReplyDetail>
                        </div>
                    </div>
                    <div>
                        <div>left</div>
                        <div><Comments></Comments></div>
                    </div>
                    <div>
                        <div>1</div>
                        <div>2</div>
                    </div>
                </div>
                <div>2</div>
            </div>
        </div>
    )
}
