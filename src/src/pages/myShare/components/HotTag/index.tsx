/*
 * @Author: hcy
 * @Date: 2022-10-19 21:52:24
 * @LastEditors: hcy
 * @LastEditTime: 2023-01-03 10:45:26
 * @FilePath: \src\src\pages\myShare\components\HotTag\index.tsx
 * @Description: 热门标签
 * 
 */
import React, { useEffect, useState } from 'react'
import { Divider, Skeleton } from 'antd'
import style from './index.less'
import { hotTags } from '@/api/myShare/hotTag'
export default function index() {
    /**
     * 标签颜色
     */
    const tagData = [
        {
            title: '',
            bcColor: '#F6D200',
            color: '#000000'
        },
        {
            title: '',
            bcColor: '#FF675B',
            color: '#ffffff'
        },
        {
            title: '',
            bcColor: '#292D2C',
            color: '#62FF6C'
        },
        {
            title: '',
            bcColor: '#3C81CD',
            color: '#ffffff'
        },
        {
            title: '',
            bcColor: '#000000',
            color: '#62FF6C'
        },
        {
            title: '',
            bcColor: '#E5F4EF',
            color: '#129D69'
        },
        {
            title: '',
            bcColor: '#58AD91',
            color: '#ffffff'
        },
        {
            title: '',
            bcColor: '#58AD91',
            color: '#ffffff'
        },
        {
            title: '',
            bcColor: '#9F35D8',
            color: '#ffffff'
        },
        {
            title: '',
            bcColor: '#3C81CD',
            color: '#ffffff'
        },
        {
            title: '',
            bcColor: '#292D2C',
            color: '#62FF6C'
        }
    ]
    const [isLoading, setIsLoading] = useState(false);
    const [tagsData, setTagsData] = useState(tagData);
    useEffect(() => {
        /**
         * 获取后端数据并随机展示颜色
         */
        setIsLoading(true)
        hotTags(1).then((res) => {
            let resData = res.data.topics.map((e:any, i:number) => {
                return {
                    title: e.description,
                    bcColor: tagData[i % 12].bcColor,
                    color: tagData[i % 12].color
                }
            })
            console.log(resData)
            setTagsData(resData)
            setIsLoading(false)
        })
    },[])
    return (
        <div className={style.container}>
            <div>热门标签</div>
            {/* 热门标签展示 */}
            <Divider style={{ marginTop: '1px', marginBottom: '1px' }} />
            <div>
                {
                    tagsData.map((e, i) => {
                        return (
                            <>
                            {
                                    isLoading ? (<Skeleton.Button active={true} />) : <div style={{ backgroundColor: e.bcColor, color: e.color }} key={i}>
                                        <div className={style.mask}></div>
                                        <span>{e.title}</span>
                                    </div>
                            }
                            
                            </>
                        )
                            
                        
                    })
                }
            </div>
        </div>
    )
}
