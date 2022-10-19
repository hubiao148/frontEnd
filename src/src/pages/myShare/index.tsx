/*
 * @Author: hcy
 * @Date: 2022-10-06 18:45:27
 * @LastEditors: hcy
 * @LastEditTime: 2022-10-18 17:43:37
 * @FilePath: \src\src\pages\myShare\index.tsx
 * @Description: 个人问答&&技术分享
 * 
 */
import Menu from '@/components/Header/components/Menu';
import React from 'react'
import style from './index.less'
export default function myShare(props) {
    const listMenu = [
        { path: '/myshare/latest', title: '最新' },
          { path: '/myshare/reply', title: '待回答' },
          { path: '/myshare/mouth', title: '月榜' },
          { path: '/myshare/week', title: '周榜' },
    ];
  return (
    <div className={style.container}>
      <div className={style.left}>
        <div>
          <div>技术问答</div>
          <div>
            <Menu id={'MyShare'} listMenu={listMenu}></Menu>
          </div>
          <div>提问题</div>
        </div>
        <div>{props.children }</div>
      </div>
      <div className={style.right}>
        <div>
          
        </div>
        <div>
          提问
        </div>
      </div>
    </div>
  )
}
