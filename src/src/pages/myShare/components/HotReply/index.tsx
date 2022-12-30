/*
 * @Author: hcy
 * @Date: 2022-10-19 21:53:19
 * @LastEditors: hcy
 * @LastEditTime: 2022-12-30 11:51:18
 * @FilePath: \src\src\pages\myShare\components\HotReply\index.tsx
 * @Description: 热门回答
 * 
 */
import React, { useEffect, useState } from 'react'
import {Divider} from 'antd'
import style from './index.less'
import { hotComment } from '@/api/myShare/hotComment'
export default function index() {
    const replyData = [
        {
            title: '项目部署环境后，如何更改yml中的配置参数',
            id:1
        }
    ]  
    // 设置数据
    const [replysData,setreplysData] =useState(replyData)
    useEffect(() => {
        /**
         * 获取基本信息
         */
        hotComment(1).then((res:any) => {
            console.log(res.data.comments)
            let resData = res.data.comments.map((e: any,i:number) => {
                return {
                    title: e.comment.content,
                    id: i+1
                }
            })
            console.log(resData)
            setreplysData(resData)
        }).catch((err:Error) => {
           console.log(err)
       })
    },[])
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
                          <div className={style.tagId} style={e.id>3?{backgroundColor:'#BEBEBE'}:{backgroundColor:'#FF675B'}}>{ e.id}</div>
                          <div className={style.bodyMsg} style={{textOverflow:'ellipsis'}}>{ e.title}</div>
                        </div>
                      )
                  })
              }
              
          </div>
    </div>
  )
}
