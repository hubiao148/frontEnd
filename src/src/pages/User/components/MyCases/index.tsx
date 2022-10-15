/*
 * @Author: hcy
 * @Date: 2022-10-13 19:33:22
 * @LastEditors: hcy
 * @LastEditTime: 2022-10-15 19:02:33
 * @FilePath: \src\src\pages\User\components\MyCases\index.tsx
 * @Description: 
 * 
 */
import React from 'react'
import style from './index.less'
import {
  EyeOutlined
} from '@ant-design/icons';
import { Pagination ,Avatar} from 'antd';
export default () => {
  const listMenu = [{
    title: 'java高级技术开发',
    auth: '小李子',
    imgUrl:require('@/assets/user_case.jpg')
  },{
    title: 'java高级技术开发',
    auth: '小冬冬',
    imgUrl:require('@/assets/user_case.jpg')
  },{
    title: 'java高级技术开发',
    auth: '小欢欢',
    imgUrl:require('@/assets/user_case.jpg')
  },{
    title: 'java高级技术开发',
    auth: '小鹏子',
    imgUrl:require('@/assets/user_case.jpg')
  },{
    title: 'java高级技术开发',
    auth: '科科',
    imgUrl:require('@/assets/user_case.jpg')
  },{
    title: 'java高级技术开发',
    auth: 'lpc',
    imgUrl:require('@/assets/user_case.jpg')
  },
  ]
  return (
    <div className={style.container}>
      {
        listMenu.map((e,index) => {
          return (<div className={style.ele}  key={index}>
            <div className={style.img} style={{ backgroundImage: `url(${e.imgUrl})` }}>   
              <div className={style.mask}>
                <div className={style.EyeOutlined }><EyeOutlined   /></div>
              </div>
            </div>
            <div style={{fontSize:'1.5rem',fontWeight:'500'}}>{e.title}</div>
            <div style={{fontSize:'1.2rem',fontWeight:'550'}}> <Avatar
        src="https://joeschmoe.io/api/v1/random"
        size={{ xs: 12, sm: 12, md: 20, lg: 20, xl: 20, xxl: 20 }}
      />{ e.auth}</div>
          </div> )
        })
      }
      <div><Pagination pageSize={6} total={50} responsive={true} /></div> 
    </div>
  )
}