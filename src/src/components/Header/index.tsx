/*
 * @Author: hcy
 * @Date: 2022-10-05 11:52:12
 * @LastEditors: hcy
 * @LastEditTime: 2022-10-05 17:16:28
 * @FilePath: \src\src\components\Header\index.tsx
 * @Description: 头部
 * 
 */
import React from 'react'
import Menu from './components/Menu'
import style from './index.less'
export default () => {
  return (
    <div className={style.header}>
      <div className={style.menu}>logo</div>
      <Menu></Menu>
      <div>3</div>
    </div>
  )
}