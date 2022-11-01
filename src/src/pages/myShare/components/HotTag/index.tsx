/*
 * @Author: hcy
 * @Date: 2022-10-19 21:52:24
 * @LastEditors: hcy
 * @LastEditTime: 2022-10-19 22:58:42
 * @FilePath: \src\src\pages\myShare\components\HotTag\index.tsx
 * @Description: 热门标签
 * 
 */
import React from 'react'
import {Divider} from 'antd'
import style from './index.less'
export default function index() {
    const tagData = [
        {
        title: 'golang',
        bcColor: '#F6D200',
        color:'#000000'
        },
        {
        title: 'gorm',
        bcColor:'#FF675B',
        color:'#ffffff'
        },
        {
        title: '程序员',
        bcColor:'#292D2C',
        color:'#62FF6C'
        },
        {
        title: '架构设计',
        bcColor:'#3C81CD',
        color:'#ffffff'
        },
        {
        title: 'Html5',
        bcColor:'#000000',
        color:'#62FF6C'
        },
        {
        title: 'php',
        bcColor:'#E5F4EF',
        color:'#129D69'
        },
        {
        title: 'mysql',
        bcColor:'#58AD91',
        color:'#ffffff'
        },
        {
        title: 'springboot',
        bcColor:'#58AD91',
        color:'#ffffff'
        },
        {
        title: 'Java',
        bcColor:'#9F35D8',
        color:'#ffffff'
        },
        {
        title: 'lodash',
        bcColor:'#3C81CD',
        color:'#ffffff'
        },
        {
        title: 'vue.js',
        bcColor:'#292D2C',
        color:'#62FF6C'
        }
    ]
  return (
    <div className={style.container}>
          <div>热门标签</div>
          <Divider style={{marginTop:'1px',marginBottom:'1px'}}/>
          <div>
              {
                  tagData.map((e, i) => {
                      return (
                          <div style={{ backgroundColor: e.bcColor ,color:e.color}} key={i}> <div className={style.mask}></div> <span>{ e.title}</span></div>
                      )
                  })
              }
          </div>
    </div>
  )
}
