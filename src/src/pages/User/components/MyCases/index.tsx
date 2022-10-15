/*
 * @Author: hcy
 * @Date: 2022-10-13 19:33:22
 * @LastEditors: hcy
 * @LastEditTime: 2022-10-14 22:07:05
 * @FilePath: \src\src\pages\User\components\MyCases\index.tsx
 * @Description: 
 * 
 */
import React from 'react'
import style from './index.less'
export default () => {
  const listMenu = [{
    title: 'java高级技术开发',
    msg: '这是一个用java开发网站的案例！',
    imgUrl:require('@/assets/user_case.jpg')
  },{
    title: 'java高级技术开发',
    msg: '这是一个用java开发网站的案例！',
    imgUrl:require('@/assets/user_case.jpg')
  },{
    title: 'java高级技术开发',
    msg: '这是一个用java开发网站的案例！',
    imgUrl:require('@/assets/user_case.jpg')
  },{
    title: 'java高级技术开发',
    msg: '这是一个用java开发网站的案例！',
    imgUrl:require('@/assets/user_case.jpg')
  },{
    title: 'java高级技术开发',
    msg: '这是一个用java开发网站的案例！',
    imgUrl:require('@/assets/user_case.jpg')
  },{
    title: 'java高级技术开发',
    msg: '这是一个用java开发网站的案例！',
    imgUrl:require('@/assets/user_case.jpg')
  },
  ]
  return (
    <div className={style.container}>
      {
        listMenu.map((e,index) => {
          return (<div className={style.ele}>
                <div className={style.img} key={index} style={{ backgroundImage: `url(${e.imgUrl})` }}>          
            </div>
            <div>{e.title}</div>
            <div>{ e.msg}</div>
          </div> )
        })
      }
    </div>
  )
}