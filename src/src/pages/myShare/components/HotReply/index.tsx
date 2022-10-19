/*
 * @Author: hcy
 * @Date: 2022-10-19 21:53:19
 * @LastEditors: hcy
 * @LastEditTime: 2022-10-19 23:36:32
 * @FilePath: \src\src\pages\myShare\components\HotReply\index.tsx
 * @Description: 
 * 
 */
import React from 'react'
import {Divider} from 'antd'
import style from './index.less'
export default function index() {
    const replyData = [
        {
            title: '项目部署环境后，如何更改yml中的配置参数',
            id:1
        },{
            title: '项目部署环境后，如何更改yml中的配置参数',
            id:2
        },{
            title: '项目部署环境后，如何更改yml中的配置参数',
            id:3
        },{
            title: '项目部署环境后，如何更改yml中的配置参数',
            id:4
        },{
            title: '项目部署环境后，如何更改yml中的配置参数',
            id:5
        },{
            title: '项目部署环境后，如何更改yml中的配置参数',
            id:6
        },{
            title: '项目部署环境后，如何更改yml中的配置参数sdfsfsdfsdfsdfsdfsfssssssssss',
            id:7
        },{
            title: '项目部署环境后，如何更改yml中的配置参数',
            id:8
        },{
            title: '项目部署环境后，如何更改yml中的配置参数',
            id:9
        },
  ]  
  return (
    <div className={style.container}>
          <div>热门回答</div>
          <Divider style={{marginTop:'1px',marginBottom:'1px'}}/>
          <div className={style.msgContainer}>
              {
                  replyData.map((e) => {
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
