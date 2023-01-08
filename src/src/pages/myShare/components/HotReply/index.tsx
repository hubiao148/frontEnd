/*
 * @Author: hcy
 * @Date: 2022-10-19 21:53:19
 * @LastEditors: hcy
 * @LastEditTime: 2023-01-03 10:39:43
 * @FilePath: \src\src\pages\myShare\components\HotReply\index.tsx
 * @Description: 热门回答
 * 
 */
import React, { useEffect, useState } from 'react'
import { Divider, Skeleton } from 'antd'
import style from './index.less'
import { hotComment } from '@/api/myShare/hotComment'
export default function index() {
    const [isLoading, setIsLoading] = useState(false);
    const replyData = [
        {
            title: '',
            id: 1
        }, {
            title: '',
            id: 2
        }, {
            title: '',
            id: 3
        }, {
            title: '',
            id: 4
        }, {
            title: '',
            id: 5
        }, {
            title: '',
            id: 5
        }, {
            title: '',
            id: 6
        }, {
            title: '',
            id: 7
        }, {
            title: '',
            id: 8
        }, {
            title: '',
            id: 9
        }, {
            title: '',
            id: 10
        }
    ]
    // 设置数据
    const [replysData, setreplysData] = useState(replyData)
    useEffect(() => {
        /**
         * 获取基本信息
         */
        setIsLoading(true);
        hotComment(1).then((res: any) => {
            console.log(res.data.comments)
            let resData = res.data.comments.map((e: any, i: number) => {
                return {
                    title: e.comment.content,
                    id: i + 1
                }
            })
            console.log(resData)
            setreplysData(resData)
            setIsLoading(false);
        }).catch((err: Error) => {
            console.log(err)
        })
    }, [])
    return (
        <div className={style.container}>
            <div>热门回答</div>
            <Divider style={{ marginTop: '1px', marginBottom: '1px' }} />
            {/* 热门回答展示 */}
            <div className={style.msgContainer}>
                {
                    replysData.map((e) => {
                        return (
                            <div key={e.id}>
                                {isLoading ? (<Skeleton.Button active={true} />) : <div className={style.tagId} style={e.id > 3 ? { backgroundColor: '#BEBEBE' } : { backgroundColor: '#FF675B' }}>{e.id}</div>}
                                {isLoading ? (<Skeleton.Input active={true} />) : <div className={style.bodyMsg} style={{ textOverflow: 'ellipsis' }}>{e.title}
                                </div>}
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}
